import React, { useState, useEffect } from "react";

import Handler from "./handler";
const PurchaseBox = ({data})=>{
    useEffect(()=>{
    },[data])
    if(!data) return null
    return(
        <Handler data={data} />
    )
}

export default PurchaseBox;