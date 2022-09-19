import React from 'react'
import Image from 'next/image'

import styles from "@styles/Avatar.module.scss"
import dropdown from "@icons/chevron-down.svg"

const Avatar = ({ name, status, image }) => {
    // Takes three props user img, user name, user status
    return (
        <div className={styles.avatarContainer}>
            <div>
                <Image src={image} width={80} height={80} className={styles.avatarImage}></Image>
            </div>
            <div className={styles.avatarInfo}>
                <h1>{name}</h1>
                <p>{status}</p>
            </div>
        </div>
    )
}

export default Avatar