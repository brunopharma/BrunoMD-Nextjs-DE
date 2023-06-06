import React, { useState, useEffect } from "react";

import Handler from "./handler";
const PurchaseBox = ({data, base})=>{
    useEffect(()=>{
    },[data])
    if(!data) return null
    return(
        <Handler data={data} base={base}/>
    )
}

export default PurchaseBox;