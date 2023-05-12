import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const AnnouncementBar = ({ announcement, theme }) => {

  return (
    <section
      className={styles.announcementBar}
      style={{
        color: theme?.textColor,
        backgroundColor: theme?.backgroundColor,
      }}
    >
      <div>
        <p>{announcement}</p>
      </div>
    </section>
  )
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
