import styles from './styles.module.css'
const TrustBadge = ({ contents,productColorTheme }) => {
    const {badges, title} = contents
    if(!badges.length || !title) return null

    return(
    <section className={styles.productBadgesContainer} style={{ 'background-color': productColorTheme || '#37246b' }}>
      <div className={styles.productBadgesCenter}>
        <div className={styles.badgeGroup}>
        {badges && badges.map((e,i)=>{
          return(<>
            {e.html ? <><div className={styles.svgHolder} dangerouslySetInnerHTML={{ __html: e.html}}/></>:
            <>
            {true ? <img className={styles.p5} src={e.src} alt={e.alt} key={i}/> : <img className={styles.p5} src={e.src} alt={e.alt} height={'125px'} key={i}/>}
            </>}
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