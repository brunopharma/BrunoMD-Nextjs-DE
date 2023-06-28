<?php
    include 'bd_connection.php';
    $loginurl = "https://login.salesforce.com/services/oauth2/token";
    $params = "grant_type=password"
    . "&client_id=".'3MVG99OxTyEMCQ3hqNYB7_tfGjDs0Ap6mq7R1pESCy3N06VqumLGSh7Kk3iiz5f7H8V0cSlKLa6F6X8QTgmeJ'
    . "&client_secret=" .'6D8C3C2BA86CA575F74EB0F9FC7237CD12D97AEEFBEE28DF87F1AC49A96E1464'
    . "&username=" . 'harsh.dx@gmail.com'
    . "&password=" . 'DesignersX06';
    $curl = curl_init($loginurl);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $params);

    $json_response = curl_exec($curl);
    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    if( $status != 200 ) {
        die("Error: call to URL failed with status $status, response $json_response, curl_error " . curl_error($curl) . ", curl_errno " . curl_errno($curl));
    }
    $result =  json_decode($json_response,true);
    $access_token = $result['access_token'];
    // echo $access_token;
    echo "</br>";
    $instance_url = "https://beautyfashionsales.my.salesforce.com";
         
    $marginurl = $instance_url."/services/data/v56.0/sobjects/Manufacturer__c/a0O3b00000p7xfAEAQ";
    $margin_opportunity = curl_init($marginurl);
    curl_setopt($margin_opportunity, CURLOPT_HEADER, false);
    curl_setopt($margin_opportunity, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($margin_opportunity, CURLOPT_HTTPHEADER, array("Authorization: OAuth $access_token"));
    $json_responsemargin = curl_exec($margin_opportunity);
    $status = curl_getinfo($margin_opportunity, CURLINFO_HTTP_CODE);
    $manufacturer_margin =  json_decode($json_responsemargin,true);
    
    // echo "<pre>";
    // print_r($manufacturer_margin['Tester_Margin__c']);
    // echo "</pre>";
    $manufacturer_discount = $manufacturer_margin['Tester_Margin__c'];

    //Get opportunities. 
    $OpportnityUrl = $instance_url."/services/data/v56.0/query?q=SELECT%20ID%20%2CAccountId%2C%20Name%20FROM%20Opportunity%20where%20ManufacturerId__c%20%3D%20'a0O3b00000p7xfAEAQ'%20%20and%20%20CreatedDate%20%3D%20Today";
    $ch_opportunity = curl_init($OpportnityUrl);
    curl_setopt($ch_opportunity, CURLOPT_HEADER, false);
    curl_setopt($ch_opportunity, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch_opportunity, CURLOPT_HTTPHEADER, array("Authorization: OAuth $access_token"));
    $json_responseopportunity = curl_exec($ch_opportunity);
    $status = curl_getinfo($ch_opportunity, CURLINFO_HTTP_CODE);
    $opportunities =  json_decode($json_responseopportunity,true);
    // echo "<pre>";
    // print_r($opportunities['records']);
    // echo "</pre>";
    $record_array  = array();
    foreach($opportunities['records'] as $record)
    {
        $record_array[]  = array(
            "opportunity_id" => $record['Id'],
            "AccountId" => $record['AccountId'],
            "name" => $record['Name']
        );
    }
    /*  echo "<pre>";
    print_r($record_array);
	 echo "</pre>";
    echo "<h3> Owners </h3>";
	
	foreach($record_array as $rec)
    {
        $OwnerEmailUrl = $instance_url."/services/data/v56.0/query?q=SELECT AccountId, FirstName, LastName, Email, Title FROM Contact where AccountId = '".$rec['AccountId']."' and Title = 'Owner'";
        $ch_owneremail = curl_init($OwnerEmailUrl);
        curl_setopt($ch_owneremail, CURLOPT_HEADER, false);
        curl_setopt($ch_owneremail, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch_owneremail, CURLOPT_HTTPHEADER, array("Authorization: OAuth $access_token"));
        $json_responseowneremail = curl_exec($ch_owneremail);
        $status = curl_getinfo($ch_owneremail, CURLINFO_HTTP_CODE);
        $OwnerEmails =  json_decode($json_responseowneremail,true);

         echo "<pre>";
         print_r($OwnerEmails);
         echo "</pre>";
	}
	die(); */
    $ordersToBe = array();
    foreach($record_array as $rec)
    {
        $OwnerEmailUrl = $instance_url."/services/data/v56.0/query?q=SELECT%20AccountId%2CFirstName%2C%20LastName%2C%20Email%2CTitle%20FROM%20Contact%20where%20AccountId%20%3D%20'".$rec['AccountId']."'%20%20and%20Title%20%3D%20'Owner'";
        $ch_owneremail = curl_init($OwnerEmailUrl);
        curl_setopt($ch_owneremail, CURLOPT_HEADER, false);
        curl_setopt($ch_owneremail, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch_owneremail, CURLOPT_HTTPHEADER, array("Authorization: OAuth $access_token"));
        $json_responseowneremail = curl_exec($ch_owneremail);
        $status = curl_getinfo($ch_owneremail, CURLINFO_HTTP_CODE);
        $OwnerEmails =  json_decode($json_responseowneremail,true);

        // echo "<pre>";
        // print_r($OwnerEmails);
        // echo "</pre>";
        if($OwnerEmails['totalSize'] == 0)
        {
            echo $rec['name']." Account has no Owner email on salesforce.<br>";
        }
        else
        {
            
                // echo "<pre>";
                // print_r($mailrecord);
                // echo "</pre>";
                $get_customerId = "SELECT sp_customer_id FROM customers WHERE email = '".$OwnerEmails['records'][0]['Email']."' ";
                $resultc = $conn->query($get_customerId);
                if($resultc->num_rows > 0){
                    while($row = $resultc->fetch_assoc() ){
                        // echo $row["id"]."<br>";
                        $customer_Id = $row["sp_customer_id"];
                    }
                } 
                else 
                {
                     // echo $row['account_id']. "is New user to shopify. <br>";
                    //  $customer_Id = " ";
                    //   echo $row['account_id']. "is New user to shopify. <br>";
                      $Caccount_id = $rec['AccountId'];
                      $customerEmailUrl = $instance_url."/services/data/v56.0/query?q=SELECT%20FirstName%2C%20LastName%2C%20Email%2CTitle%2CMailingAddress%20FROM%20Contact%20where%20AccountId%20%3D%20'".$Caccount_id."'%20%20and%20Title%20%3D%20'Owner'";
                      $ch_customeremail = curl_init($customerEmailUrl);
                      curl_setopt($ch_customeremail, CURLOPT_HEADER, false);
                      curl_setopt($ch_customeremail, CURLOPT_RETURNTRANSFER, true);
                      curl_setopt($ch_customeremail, CURLOPT_HTTPHEADER, array("Authorization: OAuth $access_token"));
                      $json_responsecustomeremail = curl_exec($ch_customeremail);
                      $status = curl_getinfo($ch_customeremail, CURLINFO_HTTP_CODE);
                      $customerEmails =  json_decode($json_responsecustomeremail,true);
                      // echo "<pre>";
                      // print_r($customerEmails['records'][0]);
                      // echo "</pre>";
                      $customer_info = array(
                          "customer" => [
                              "first_name" => $customerEmails['records'][0]['FirstName'],
                              "last_name" => $customerEmails['records'][0]['LastName'],
                              "email" => $customerEmails['records'][0]['Email']
                          ],
                          "addresses" => [ 
                                  array(
                                      "address1" => $customerEmails['records'][0]['MailingAddress']['street'],
                                      "city" =>  $customerEmails['records'][0]['MailingAddress']['city'],
                                      "zip" => $customerEmails['records'][0]['MailingAddress']['postalCode'],
                                      "country" => $customerEmails['records'][0]['MailingAddress']['country']
                                      )
                                  ]
                      );
                        //   echo "<pre>";
                        //   print_r($customer_info);
                        //   echo "</pre>";
                          $urlPostCustomer = "https://490065e1a8dca83e228e60b138e713a6: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@bfs-integration.myshopify.com/admin/api/2023-01/customers.json";
                  
                          $customerurl = curl_init($urlPostCustomer);
                          curl_setopt($customerurl, CURLOPT_URL, $urlPostCustomer);
                          curl_setopt($customerurl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                          curl_setopt($customerurl, CURLOPT_RETURNTRANSFER, true);
                          curl_setopt($customerurl, CURLOPT_CUSTOMREQUEST, "POST");
                          curl_setopt($customerurl, CURLOPT_POSTFIELDS, json_encode($customer_info));
                          $customerresponse = curl_exec($customerurl);
                          $customer =  json_decode($customerresponse,true);
                            //   echo "<pre>";
                            //   print_r($customer);
                            //   echo "</pre>";
                             if($customer)
                             {
                                 $insert_customers = 'INSERT INTO customers (email,sp_customer_id,accept_marketing,sp_created_at,sp_updated_at,first_name,last_name,tags,state) VALUES ("'.$customer['customer']['email'].'","'.$customer['customer']['id'].'", "'.$customer['customer']['accepts_marketing'].'","'.$customer['customer']['created_at'].'","'.$customer['customer']['updated_at'].'","'.$customer['customer']['first_name'].'","'.$customer['customer']['last_name'].'","'.$customer['customer']['tags'].'","'.$customer['customer']['state'].'")';
                                 echo $customer['customer']['first_name']." ".$customer['customer']['last_name']. ": New Customer is added to shopify.";
                                 if (mysqli_query($conn, $insert_customers)) {
                                     // echo "New record created successfully <br>";
                                     
                                 } else {
                                 echo "Error: " . $insert_customers . "<br>" . mysqli_error($conn);
                                 }
 
                             }
                             $customer_Id = $customer['customer']['id'];
                }
                // echo $new_customer."<br>";
                $ordersToBe[] = array(
                    "mail" => $OwnerEmails['records'][0]['Email'],
                    "opportuityID" => $rec['opportunity_id'],
                    "name" => $rec['name'],
                    "accountId" => $rec['AccountId'],
                    "customer_id" => $customer_Id,
                );
            
        }

    }
    $get_brandsId = "SELECT id FROM brands WHERE sf_manufacturerId = 'a0O3b00000p7xfAEAQ' ";
    $result = $conn->query($get_brandsId);
    if ($result->num_rows > 0){
        while($row = $result->fetch_assoc() ){
            // echo $row["id"]."<br>";
            $brand_id = $row["id"];
        }
    } else {
        $brand_id = "a0O3b00000p7xfAEAQ";
    }

    // echo "<pre>";
    // print_r($ordersToBe);
    // echo "</pre>";
    foreach($ordersToBe as $data)
    {
        // echo "<pre>";
        // print_r($data);
        // echo "</pre>";
        $sf_opportunityID = $data['opportuityID'];
        // echo "</pre>";

        $opprunity_url =  $instance_url."/services/data/v56.0/sobjects/Opportunity/".$sf_opportunityID."";
        $opp_ch = curl_init($opprunity_url);
        curl_setopt($opp_ch, CURLOPT_HEADER, false);
        curl_setopt($opp_ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($opp_ch, CURLOPT_HTTPHEADER, array("Authorization: OAuth $access_token"));
        $json_response_oppres = curl_exec($opp_ch);
        $status_opp = curl_getinfo($opp_ch, CURLINFO_HTTP_CODE);
        $opportunityresult =  json_decode($json_response_oppres,true);
        // echo "<pre>";
        // print_r($opportunityresult);
        // echo "</pre>";
        $po_number = $opportunityresult['PO_Number__c'];
        $order_date = $opportunityresult['CreatedDate'];
        $comment = $opportunityresult['Description'];
        $d_note = 'PO#: '.$po_number.'; ORDER DATE: ' .date('d/m/y',strtotime($order_date)).'; CANCEL DATE: ; REP COMMENTS:'.$comment; 
        
        $get_draftOrders = "SELECT sf_opportunityID FROM draft_orders";
        $dOrderresult = $conn->query($get_draftOrders);               
        $dorder_id_array = array();
        if ($dOrderresult->num_rows > 0) 
        {
            while($row = $dOrderresult->fetch_assoc()) {
            // echo "opportunityId: " . $row["sf_opportunityID"]. "<br>";
            $dorder_id_array[] = $row["sf_opportunityID"];
            }
        }
        else 
        {
            // echo "no record found";
        }
        // echo "<pre>";
        // print_r($dorder_id_array);
        // echo "</pre>";
        if(!in_array($sf_opportunityID , $dorder_id_array))
        {
            $insert_draftorder = 'INSERT INTO draft_orders (band_id, account_id,sf_opportunityID,created_status,order_status,sp_note,sf_po_number,sp_customerId,sp_customer_name) VALUES ("a0O3b00000p7xfAEAQ","'.$data['accountId'].'", "'.$sf_opportunityID.'","0","0","'.$d_note.'","'.$po_number.'","'.$data['customer_id'].'","'.$data['name'].'")';
            if (mysqli_query($conn, $insert_draftorder)) {
                     echo "Draft Order is created for: " .$data['name'] .".<br>";
                } else {
                    echo "Error: " . $insert_draftorder . "<br>" . mysqli_error($conn);
                }
        }
        else
        {
            // echo "account already exist";   
        }

    }
    //get order details
    $get_alldraftOrders = "SELECT * FROM draft_orders Where created_status = '0'";
    $alldOrderresult = $conn->query($get_alldraftOrders);
    
    $alldorder_id_array = array();
    if ($alldOrderresult->num_rows > 0) 
    {
        while($row = $alldOrderresult->fetch_assoc()) {
        // echo "opportunityId: " . $row["sf_opportunityID"]. "<br>";
        $alldorder_id_array[] = array(
            'sf_opportunityID' => $row["sf_opportunityID"],
            'dbId' => $row["id"]
        );
    
      }
    }
    else 
    {
        // echo "no record found";
    }
    // echo "<pre>";
    // print_r($alldorder_id_array);
    // echo "</pre>";
    foreach($alldorder_id_array as $SForderId)
    {
        $opprunityLineItem_url = "https://beautyfashionsales.my.salesforce.com/services/data/v56.0/sobjects/Opportunity/".$SForderId['sf_opportunityID']."/OpportunityLineItems";
            $oppLineItem_ch = curl_init($opprunityLineItem_url);
            curl_setopt($oppLineItem_ch, CURLOPT_HEADER, false);
            curl_setopt($oppLineItem_ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($oppLineItem_ch, CURLOPT_HTTPHEADER, array("Authorization: OAuth $access_token"));
            $json_response_opp = curl_exec($oppLineItem_ch);
            $status = curl_getinfo($oppLineItem_ch, CURLINFO_HTTP_CODE);
            $apothe_opportunitiesLineItems =  json_decode($json_response_opp,true);
            // echo "<pre>";
            // print_r($apothe_opportunitiesLineItems);
            // echo "</pre>";
            $order_array = array();
            foreach($apothe_opportunitiesLineItems['records'] as $oppLineItems)
            {
                // echo "<pre>";
                // print_r($oppLineItems);
                // echo "</pre>";
                $opportunityLineItemId = $oppLineItems['Id'];
                $opprunityProduct2_url = "https://beautyfashionsales.my.salesforce.com/services/data/v56.0/sobjects/OpportunityLineItem/".$opportunityLineItemId."/Product2";
                $oppopprunityProduct2_url_ch = curl_init($opprunityProduct2_url);
                curl_setopt($oppopprunityProduct2_url_ch, CURLOPT_HEADER, false);
                curl_setopt($oppopprunityProduct2_url_ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($oppopprunityProduct2_url_ch, CURLOPT_HTTPHEADER, array("Authorization: OAuth $access_token"));
                $json_response_opp1 = curl_exec($oppopprunityProduct2_url_ch);
                $status = curl_getinfo($oppopprunityProduct2_url_ch, CURLINFO_HTTP_CODE);
                $apothe_oppopprunityProduct2 =  json_decode($json_response_opp1,true);
                // echo "<pre>";
                // print_r($apothe_oppopprunityProduct2['ProductUPC__c']);
                // echo "</pre>";
                $order_array[] =  $order = array(
                    'dborderId' =>  $SForderId['dbId'],
                    'OpportunityId' => $oppLineItems['OpportunityId'],
                    'opportunityLineItemId' => $oppLineItems['Id'],
                    'SKU' => $oppLineItems['ProductCode'],
                    'product_quantity' => $oppLineItems['Quantity'],
                    'product_unitprice' => $oppLineItems['UnitPrice'],
                    'product_totalprice' => $oppLineItems['TotalPrice'],
                    'product_barcode' => $apothe_oppopprunityProduct2['ProductUPC__c']
                );
            }  
            // echo "<pre>";
            // print_r($order_array);
            // echo "</pre>";
            $shopify_url = "https://490065e1a8dca83e228e60b138e713a6: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@bfs-integration.myshopify.com/admin/api/2023-01/variants.json";
                $shopifyurl = curl_init($shopify_url);
                curl_setopt($shopifyurl, CURLOPT_URL, $shopify_url);
                curl_setopt($shopifyurl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                curl_setopt($shopifyurl, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($shopifyurl, CURLOPT_CUSTOMREQUEST, "GET");
                $response = curl_exec($shopifyurl);
                $all_variants =  json_decode($response,true);
                foreach($all_variants as $variant)
                {
                    $lineitemcollection = array();
                    foreach($order_array as $salesforce_order)
                    {
                        foreach($variant as $shopify_variant)
                        {
                            // echo "<pre>";
                            // print_r($salesforce_order);
                            // echo "</pre>";
                            if($salesforce_order['product_barcode'] == $shopify_variant['barcode'])
                            {
                            $lineitemcollection[] =  array(
                                'variant_id' =>  $shopify_variant['id'],
                                'product_id' => $shopify_variant['product_id'],
                                'quantity' => $salesforce_order['product_quantity'],
                                'order_id' => $salesforce_order['dborderId'],
                                'sf_opportunityLineItemID' => $salesforce_order['opportunityLineItemId'],
                                'sf_opportunityID' => $salesforce_order['OpportunityId'],
                                'total_price' => $salesforce_order['product_totalprice'],
                                'unit_price' => $salesforce_order['product_unitprice'],
                                );
                                
                            }
                        } 

                        $get_draftOrdersdetail = "SELECT sf_opportunityLineItemID FROM draftorder_details";
                        $detailOrderresult = $conn->query($get_draftOrdersdetail);
                        
                        $deatilorder_id_array = array();
                        if ($detailOrderresult->num_rows > 0) 
                        {
                            while($row = $detailOrderresult->fetch_assoc()) {
                            $deatilorder_id_array[] = $row["sf_opportunityLineItemID"];
                          }
                        }
                        else 
                        {
                            // echo "no record found";
                        }
                    }
                    // echo "<pre>";
                    // print_r($lineitemcollection);
                    // echo "</pre>";
                        foreach($lineitemcollection as $items)
                        {
                            // echo "<pre>";
                            // print_r($items['variant_id']);
                            // echo "<pre>";
                            if(!in_array($items['sf_opportunityLineItemID'] , $deatilorder_id_array))
                            {
                                $insert_ddraftorder = 'INSERT INTO draftorder_details (order_id, sf_opportunityLineItemID,sf_opportunityID,product_id,variant_id,product_quantity,total_price,unit_price) VALUES ("'.$items['order_id'].'","'.$items['sf_opportunityLineItemID'].'", "'.$items['sf_opportunityID'].'","'.$items['product_id'].'","'.$items['variant_id'].'","'.$items['quantity'].'","'.$items['total_price'].'","'.$items['unit_price'].'")';
                                if (mysqli_query($conn, $insert_ddraftorder)) {
                                    // echo "New record created successfully <br>";
                                   
                                } else {
                                echo "Error: " . $insert_ddraftorder . "<br>" . mysqli_error($conn);
                                }
                            }
                            else
                            {
                                // echo "account already exist";   
                            }
                        }  
                }
        }
       
            $getorder1 = "SELECT * FROM draft_orders WHERE created_status = 0";
            $orderresult1 = $conn->query($getorder1);
            if ($orderresult1->num_rows > 0) 
                {
                    while($row = $orderresult1->fetch_assoc()) 
                    {
                        // echo "<pre>";
                        // print_r($row);
                        // echo "</pre>";
                        $order_id = $row['id'];
                        $note = $row['sp_note'];
                        $customer_id = $row['sp_customerId'];
                        $customer_name = $row['sp_customer_name'];
                        $accountId = $row['account_id'];
                        $getItems = "SELECT * FROM draftorder_details WHERE order_id = $order_id";
                        $itemresult = $conn->query($getItems);

                        if ($itemresult->num_rows > 0) 
                        {
                            $lineitemcollection = array();
                            while($row1 = $itemresult->fetch_assoc()) {
                                // echo "<pre>";
                                // print_r($row1);
                                // echo "</pre>";
                                $lineitemcollection[] =  array(
                                    'variant_id' =>  $row1['variant_id'],
                                    'product_id' => $row1['product_id'],
                                    'price' => $row1['unit_price'],
                                    'quantity' => $row1['product_quantity']
                                    );
                            }
                        
                        }

                        $accountMargin_url = "https://beautyfashionsales.my.salesforce.com/services/data/v56.0/query?q=SELECT%20Margin__c%2C%20AccountId__c%2C%20Name%2C%20Account_Number__c%2C%20ManufacturerName__c%20%20FROM%20Account_Manufacturer__c%20where%20ManufacturerId__c%3D%20'a0O3b00000p7xfAEAQ'%20%20and%20AccountId__c%20%3D%20'".$accountId."'";
                        $accountMargin_url_ch = curl_init($accountMargin_url);
                        curl_setopt($accountMargin_url_ch, CURLOPT_HEADER, false);
                        curl_setopt($accountMargin_url_ch, CURLOPT_RETURNTRANSFER, true);
                        curl_setopt($accountMargin_url_ch, CURLOPT_HTTPHEADER, array("Authorization: OAuth $access_token"));
                        $json_response_1 = curl_exec($accountMargin_url_ch);
                        $status = curl_getinfo($accountMargin_url_ch, CURLINFO_HTTP_CODE);
                        $accountMargin =  json_decode($json_response_1,true);
                        // echo "<pre>";
                        // print_r($accountMargin['Margin__c']);
                        // echo "</pre>";
                        $margin = $accountMargin['records'][0]['Margin__c'];
                        //  echo "<pre>";
                        //     print_r($lineitemcollection);
                        //     echo "</pre>";
                        $draft_order = array(
                            'draft_order' => array(
                                'line_items' => 
                                    $lineitemcollection
                            ,
                                'customer' =>
                                [
                                    "id"=> $customer_id
                                    
                                ],
                                'note' => $note,
                                'tags' => "salesforce , ".$customer_name."",
                                "applied_discount" => [
                                    "description" => $margin."%",
                                    "value_type" => "percentage",
                                    "value" => $margin
                                ]
                            )
                        );
                        // echo "<pre>";
                        // print_r($draft_order);
                        // echo "</pre>";
                        $url = "https://490065e1a8dca83e228e60b138e713a6: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@bfs-integration.myshopify.com/admin/api/2023-01/draft_orders.json";
                        
                        $curl = curl_init($url);
                        curl_setopt($curl, CURLOPT_URL, $url);
                        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
                        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($draft_order));
                        $spdraftresponse = curl_exec($curl);
                        $spdfres =  json_decode($spdraftresponse,true);
                            // echo "<pre>";
                            // print_r($spdfres);
                            // echo "</pre>";
                        curl_close($curl);
                        // echo "draft order created sucssfully. please check shopify store";
                        $sp_order_id = $spdfres['draft_order']['id'];
                    
                        $update_draftorder_status = "UPDATE draft_orders SET created_status = 1, sp_dOrderId =  $sp_order_id WHERE id = $order_id";
                        if ($conn->query($update_draftorder_status) === TRUE) {
                        // echo "Record updated successfully";
                        } else {
                        echo "Error updating record: " . $conn->error;
                        }
                        
                    }
                    echo "<div style='margin-left:40%;margin-right:40%;margin-top:7%;border:solid black 1px; padding-top:50px;padding-left:30px;height:100px;'> Draft order created successfully. <br> Please check shopify store </div>";
                }
                else 
                {
                    echo "<div style='margin-left:30%;margin-right:30%;margin-top:7%;border:solid black 1px; padding-top:50px;padding-left:30px;height:100px;'> No Order Found!! <br> Please create order and hit the url again.</div>";
                }
                

            
    
    $sp_Corderurl = "https://490065e1a8dca83e228e60b138e713a6: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@bfs-integration.myshopify.com/admin/api/2023-01/draft_orders.json?status=completed";
    $cOrdercurl = curl_init();
    curl_setopt($cOrdercurl, CURLOPT_URL, $sp_Corderurl);
    curl_setopt($cOrdercurl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($cOrdercurl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($cOrdercurl, CURLOPT_CUSTOMREQUEST, "GET");
    $corderUrlresponse = curl_exec($cOrdercurl);
    curl_close($cOrdercurl);
    $Corderresult =  json_decode($corderUrlresponse,true);
    // echo"<pre>";
    // print_r($Corderresult);
    // echo"</pre>";
    foreach($Corderresult as $compOrder)
    {
        foreach($compOrder as $corder)
        {
            // echo"<pre>";
            // print_r($corder['id']);
            // echo"<br>";
            // print_r($corder['order_id']);
            // echo"</pre>";
            $draft_orderId = $corder['id'];
            $orderId = $corder['order_id'];
            $updateDraftorder_status = "UPDATE draft_orders SET order_status = 2, sp_order_id =  $orderId , created_status = 2 WHERE sp_dOrderId = $draft_orderId";
            if ($conn->query($updateDraftorder_status) === TRUE) {
                    $get_Orders2 = "SELECT * FROM draft_orders Where created_status = '2'";
                    $allOrderresult = $conn->query($get_Orders2);
                    if ($allOrderresult->num_rows > 0) 
                    {
                        while($row = $allOrderresult->fetch_assoc()) 
                        {
                            $oppId = $row['sf_opportunityID'];
                            $order_number = $row['sp_order_id'];
                            $id = $row['id'];
                            $curl = curl_init();
                            curl_setopt_array($curl, array(
                                CURLOPT_URL => "https://beautyfashionsales.my.salesforce.com/services/data/v56.0/sobjects/Opportunity/".$oppId."",
                                CURLOPT_RETURNTRANSFER => true,
                                CURLOPT_ENCODING => "",
                                CURLOPT_MAXREDIRS => 10,
                                CURLOPT_TIMEOUT => 30,
                                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                                CURLOPT_CUSTOMREQUEST => "PATCH",
                                CURLOPT_POSTFIELDS => "{\n\t\"Order_Number__c\":".$order_number."\n\t\n}",
                                CURLOPT_HTTPHEADER => array(
                                  "authorization: Bearer $access_token",
                                  "cache-control: no-cache",
                                  "content-type: application/json",
                                ),
                              ));
                              
                              $response = curl_exec($curl);
                              $err = curl_error($curl);
                              $updateDraftorder_status3 = "UPDATE draft_orders SET  created_status = 3 WHERE id = $id";
                              $order_confirmed = $conn->query($updateDraftorder_status3);
                              if ($conn->query($updateDraftorder_status3) === TRUE) {
                                
                                // echo "<div style='margin-left:30%;margin-right:30%;margin-top:7%;border:solid black 1px; padding-top:50px;padding-left:30px;height:100px;'> Order number is updated for .'".$oppId."' opportunity/Order <br></div>";
                              }
                              
                        }
                        
                    }
                    else 
                    {
                        // echo "no record found";
                    }
            } else {
                echo "Error updating record: " . $conn->error;
            }
        }
    }
    
    ?>