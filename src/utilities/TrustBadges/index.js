import styles from './styles.module.css'
import Image from 'next/image';
const TrustBadge = ({ contents }) => {
    const {badges, title, theme} = contents
    if(!badges.length || !title) return null

    return(
    <section className={styles.productBadgesContainer} style={{ 'background-color': theme || '#37246b' }}>
      <div className={styles.productBadgesCenter}>
        <div className={styles.badgeGroup}>
        {badges && badges.map((e,i)=>{
          return(
            <>
            {true ? <Image className={styles.p5} src={e.src} alt={e.alt} width height key={i}/> : <Image className={styles.p5} src={e.src} alt={e.alt} height={'125px'} key={i}/>}
            </>
          )
        })}
        </div>
        <div className={styles.headline}>
          {title}
        </div>
      </div>
    </section>
    )
}
export default TrustBadge