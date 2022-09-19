import React from 'react'
import styles from "@styles/Modal.module.scss"
const Options = ({ options }) => {
    //Takes in a prop of an array and displays the array contents
    return (
        <div className={`${styles.optionsModal}`}>
            {
                options.map((option, index) => {
                    return (
                        <h1 className={`${styles.optionsModalItems}`} key={index}>{option.name}</h1>
                    )
                })
            }
        </div>
    )
}

export default Options