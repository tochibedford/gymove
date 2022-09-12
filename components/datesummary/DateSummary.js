import React from 'react'
import styles from '@styles/DateSummary.module.scss'
const DateSummary = ({ weekday, day }) => {
    // Takes a weekday and day of the week as props
    return (
        <div className={styles.dateSummary}>
            <h1>{day}</h1>
            <p>{weekday}</p>
        </div>
    )
}

export default DateSummary