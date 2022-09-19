import React from 'react'
import styles from '@styles/DateSummary.module.scss'
const MiniDateSummary = ({ day }) => {
    // Takes a day of the week as a prop
    return (
        <div className={styles.minidateSummary}>
            <h1>{day}</h1>
        </div>
    )
}

export default MiniDateSummary