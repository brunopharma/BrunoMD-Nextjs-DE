import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Client from 'shopify-buy';

const ModalBoxInner = ({ isOpen, content, ModalHandler,clickedType,externalId ,version }) => {
    //get subscription id of a shopify product in nextjs?
    const [type, setType] = useState(clickedType);
    const [ quantity, setQuantity] = useState(1);
    const [variantId, setVariantId] = useState();
    let client = undefined
    const [shopifyP, setSProduct] = useState();
    if(version == 'EU'){
        client = Client.buildClient({
            domain: 'bruno-md-europe.myshopify.com',
            storefrontAccessToken: 'a51b71098dff9f7cfd68456c464991bb'
        });
    }
    if(version == 'ENG'){
        client = Client.buildClient({
            domain: 'brunomd.myshopify.com',
            storefrontAccessToken: '4233f2f4417f089c3d28dbd476de595c'
        });
    }
    useEffect(()=>{
        if (externalId) {
            const productId = `gid://shopify/Product/${externalId}`;
            fetchProduct(productId)
        } else {
            window.location.href = '/';
        }
        setType(clickedType)
    },[clickedType])
    const fetchProduct =async (productId)=>{
        await client.product?.fetch(productId).then((product) => {
            if (product) {
                console.warn({product});
                setSProduct(product)
                setVariantId(shopifyP?.variants[0]?.id)
            }
        });
    }
    const QtyHandler = e => {
        const { name, value } = e.target
        setType(value)
        setQuantity(1)
    }
    const autoQtyHandler = ()=>{
        setQuantity(2);
    }
    const QtyIncrement = (e)=>{
        const {value} = e.target;
        setQuantity(parseInt(value));
    }
    const CreateCart = () => {
        // alert("soon.")
        console.warn({quantity , variantId});
        if (quantity && variantId) {
          let cId = localStorage.getItem('e6S4JJM9G');
          if (!cId) {
            client.checkout.create().then((checkout) => {
              let checkOutId = checkout.id;
              localStorage.setItem('e6S4JJM9G', checkOutId);
              AddToCart(checkOutId);
            });
          } else {
            AddToCart(cId);
          }
        }
      };
    
      const AddToCart = (checkOutId) => {
        const lineItemsToAdd = [
          {
            variantId,
            quantity
          },
        ];
        client.checkout
          .addLineItems(checkOutId, lineItemsToAdd)
          .then((checkout) => {
            // Do something with the updated checkout
            // window.location.href = checkout.webUrl;
          });
      };
    return (
        <section>
            {isOpen === true && (
                <div className={styles.holder}>
                    {isOpen && (<div className={styles.exitButton} onClick={ModalHandler}>
                        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="white" fill-rule="evenodd"><path fill="#FFBF3C" d="M0 0h40v40H0z" /><path fill="#00A0DD" fill-rule="nonzero" d="M16.93 25.416l3.267-3.266 3.069 3.07 2.09-2.09-3.07-3.07 3.13-3.13-2.338-2.337-3.13 3.13-3.078-3.078-2.09 2.089 3.079 3.078-3.266 3.266z" /></g></svg>
                    </div>)}
                    <div className={styles.conHolder}>
                        <div className={styles.container}>
                            <div className={styles.boxOne}>
                                <div style={{ color: '#ffbf3c' }}>CODE AUTOMATICALLY APPLIED AT CHECKOUT FOR 30% OFF ONE-TIME PURCHASE</div>
                                <div>100% SATISFACTION 30-DAY MONEY-BACK GUARANTEE</div>
                            </div>
                            <div className={styles.boxHide}><img width="150" height="150" src="https://f.shgcdn.com/ab21f754-d400-4d8f-80cf-198be3329f90/" className="styles_imageSource__xZJZ_" /></div>
                            <div className={styles.boxTwo}>
                                <input id='Subscribe' type='radio' className={styles.hide} onClick={QtyHandler} name='QTY' value={'Subscribe'} checked={type == 'Subscribe' ? true : false} />
                                <label className={styles.label} for={'Subscribe'}>
                                    <p>$50.38 <span className={styles.strike}>$62.98</span></p>
                                    <p className={styles.ft12}>SAVE $12.60 WITH SUBSCRIBE & SAVE</p>
                                </label>
                            </div>
                            <div className={styles.boxThree}>
                                <input id='Onetime' type='radio' className={styles.hide} checked={type == 'Onetime' ? true : false} name='QTY' value={'Onetime'} onClick={QtyHandler} />
                                <label className={styles.label} for={'Onetime'}>
                                    <p>$50.38 <span className={styles.strike}>$62.98</span></p>
                                    <p className={styles.ft12}>EXCLUSIVE OFFER. SAVE 30% ($18.89)</p>
                                </label>
                            </div>
                            <div className={styles.boxFour}><img width="150" height="150" src="https://f.shgcdn.com/ab21f754-d400-4d8f-80cf-198be3329f90/" className="styles_imageSource__xZJZ_" /></div>
                            <div className={styles.boxFive}>
                                <p>SAVE 20% WITH SUBSCRIBE &amp; SAVE</p>
                                <p>ON ALL FUTURE DELIVERIES</p>
                                <ul style={{ listStyle: 'inside disc' }}><li>NO FEES</li><li>CANCEL ANYTIME</li></ul>

                            </div>
                            <div className={styles.boxSix}><p>SAVINGS APPLIED AT CHECKOUT. ONE-TIME PURCHASE ONLY, LIMIT TWO PER HOUSEHOLD</p>

                            </div>
                            <div className={styles.boxSeven}>
                                {type == 'Subscribe' ? <div className={styles.freqHolder}><label className={styles.selectLabel}>Delivery every:</label>
                                    <select className="styles_select__xqdkO"><option value="30">30 days</option><option value="60">60 days</option><option value="90">90 days</option></select></div> : <div className={styles.boxTen}>
                                        <div>
                                            <p>Buy 2 Get</p>
                                            <p><span>FREE SHIPPING</span></p>
                                        </div>
                                        <img src='\utility\free-shipping-32.png' />
                                    </div>}
                            </div>
                            <div className={styles.boxEight}>
                                <div className={styles.qtyHolder}>
                                    <label class={styles.selectLabel}>QTY:</label>
                                    <select class="styles_select__sBd98" onChange={QtyIncrement}>
                                        <option value="1" selected={quantity == 1 ? true : false}>1</option>
                                        <option value="2" selected={quantity == 2 ? true : false}>2</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.boxNight}>
                                <div className={styles.mobHide}></div>
                                <div className={styles.btnContainer}>
                                    <p className={styles.btn}>{type == 'Subscribe' ? 'Subscribe' : 'Checkout'}</p>
                                    {type == 'Onetime' &&<div className={styles.boxTen} onClick={autoQtyHandler} value='2'>
                                        <div>
                                            <p>Buy 2 Get</p>
                                            <p><span>FREE SHIPPING</span></p>
                                        </div>
                                        <img src='\utility\free-shipping-32.png' />
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ModalBoxInner