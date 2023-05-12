import React from "react";
import Slider from "../Slider";
import styles from './styles.module.css'

const ProductCard = ({ data }) => {
    const { images, declaimer, priceDescription } = data || {};
    const [isActive, setIsActive] = React.useState(1);
    if (!data) return null;
    console.log({images});
    return (
        <div className={styles.productCard}>
            <div style={{margin:'auto'}}>{images?.length &&<img src={images[0]?.src} alt="..." width={250}/>}</div>
            <div>
                <div
                    dangerouslySetInnerHTML={{ __html: declaimer?.title }}
                ></div>
                <div
                    dangerouslySetInnerHTML={{ __html: declaimer?.subTitle }}
                ></div>
                <div
                    dangerouslySetInnerHTML={{ __html: declaimer?.content }}
                ></div>
            </div>
            <div>
                <div style={{border:'1px solid',background:'#eee',padding:'5px',margin:'20px 0 10px',width:'400px'}} onClick={() => setIsActive(1)}>ACQUISTO SINGOLO</div>
                {isActive == 1 &&<div ><select>
                    <option>1</option>
                    <option>2</option>
                </select>
                <br />
                    <button style={{border:'1px solid',background:'#000',padding:'5px',margin:'20px 0 10px',color:'#fff'}}>Aggiungi al carrello</button>
                </div>}
                <div onClick={() => setIsActive(2)} style={{border:'1px solid',background:'#eee',padding:'5px',margin:'20px 0 10px',width:'400px'}}>ACQUISTO PERIODICO</div>
                {isActive == 2 &&<div ><select>
                    <option>1</option>
                    <option>2</option>
                </select>
                <br />
                    <button style={{border:'1px solid',background:'#000',padding:'5px',margin:'20px 0 10px',color:'#fff'}}>Aggiungi al carrello</button>
                </div>}
            </div>
        </div>
    )
}

export default ProductCard;