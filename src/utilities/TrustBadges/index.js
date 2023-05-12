import styles from './styles.module.css'
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
            {true ? <img className={styles.p5} src={e.src} alt={e.alt} key={i}/> : <img className={styles.p5} src={e.src} alt={e.alt} height={'125px'} key={i}/>}
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