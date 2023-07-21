import styles from './styles.module.css'

const CartItemList = ({items,content,removeItem}) => {
    const {removeBtnText,QTYLabel} = content || null;
    return (
        <div>
            {items.length && items.map((e,i)=>{
                return(
                    <div className={styles.cartItem} key={i}>
                        <img width="200" className={styles.productImage} src={e.variant.image.src} alt={e.variant.image.imageAlt} />
                        <div className={styles.productBody}>
                            <p className={styles.productName}>{e.title}</p>
                            <p className={styles.productPrice}>{e.variant.price.amount}</p>
                            <div className={styles.productActions}>
                                <div className={styles.productActionsQuantity}>
                                    <span className={styles.productActionsQuantityLabel}>{QTYLabel}</span>
                                    <input
                                        defaultValue={e.quantity}
                                        type="number"
                                        min="1"
                                    />
                                </div>
                                <button className={styles.productActionsRemove} onClick={removeItem}>
                                    {removeBtnText}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default CartItemList