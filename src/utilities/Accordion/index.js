import React, { useState } from 'react';
import styles from './styles.module.css'

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };
    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div key={item.title} className={styles.itemContainer}>
                    <button onClick={() => handleClick(index)} className={styles.title}>{item.title}</button>
                    {index === activeIndex && <p>{item.content}</p>}
                </div>
            ))}
        </div>
    );
}
export default Accordion;