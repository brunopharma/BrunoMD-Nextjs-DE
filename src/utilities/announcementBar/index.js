import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const AnnouncementBar = ({ announcement, theme,ModalHandler }) => {
if(ModalHandler){
  return (
    <section
    className={styles.announcementBar}
    style={{
      color: theme?.textColor,
      backgroundColor: theme?.backgroundColor,
      position:theme.position
    }}
    onClick={ModalHandler}
    >
      <div>
        <p>{announcement}</p>
      </div>
    </section>
  )
}else{
  return (
    <section
    className={styles.announcementBar}
    style={{
      color: theme?.textColor,
      backgroundColor: theme?.backgroundColor,
      position:theme.position
    }}
    >
      <div>
        <p>{announcement}</p>
      </div>
    </section>
  )
}
}

AnnouncementBar.propTypes = {
  announcement: PropTypes.array,
  theme: PropTypes.shape({
    textColor: PropTypes.shape({
      hexColor: PropTypes.string,
    }),
    backgroundColor: PropTypes.shape({
      hexColor: PropTypes.string,
    }),
  }),
}

export default AnnouncementBar
