import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from "../FourStepProcess/accordion";
import styles from './styles.module.css'

const ProductSlideAccordion = ({ content, theme }) => {
    return (
        <div className={styles.container}>
            <div className={styles.twoCol}>
                <div>
                    <img src={'https://f.shgcdn.com/77b7b288-6363-4b57-9cbd-e14b8e7850cb/'} className={styles.image} />
                </div>
                <div className={styles.wrapper}>
                    <h3 className={styles.header}>Riboflam</h3>
                    <h3 className={styles.subHeader} style={{ color: theme }}>Clinically Proven Benefits</h3>
                    <p className={styles.underHeaderNote}>From Pharma-grade ingredients</p>
                    <Accordion allowMultiple className={styles.accordion}>
                        {content.items.map((element, idx) => {
                            return (
                                <AccordionItem className={styles.accordionItem} key={idx}>
                                    <AccordionButton className={styles.accordionButton}>
                                        <p className={styles.note}>{element.title}</p>
                                        <div style={{ color: theme }}>
                                            <AccordionIcon variant="arrow-default" />
                                        </div>
                                    </AccordionButton>
                                    <AccordionPanel className={styles.AccordionPanel}>
                                        <div className={styles.expanded}>{element.description}</div>
                                    </AccordionPanel>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
            </div>
            )
}
            export default ProductSlideAccordion;