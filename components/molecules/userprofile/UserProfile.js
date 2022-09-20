import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import styles from "@styles/UserProfile.module.scss"
import Avatar from '@components/atoms/avatar/Avatar'
import dropdown from "@icons/chevron-down.svg"
import Options from '@components/atoms/modals/Options'

const UserProfile = ({ name, status, image }) => {
    // Takes in three props name, image and status from the atom component
    // The drop down icon contains an onclick function that toggles a drop down with options for the user

    const userOptions = [{ name: "Activity" }, { name: "Settings" }, { name: "Logout" }];

    const [showUserOptions, setShowUserOptions] = useState(false)
    return (
        <div className={styles.userProfileContainer}>
            <Avatar name={name} status={status} image={image}></Avatar>
            <div className={showUserOptions ? styles.onclickDropdown : styles.defaultDropdown}>
                <Image src={dropdown} width={30} height={30} onClick={() => setShowUserOptions(!showUserOptions)}></Image>
            </div>

            <div className={showUserOptions ? styles.showUserOptions : styles.removeUserOptions}>
                <Options options={userOptions}></Options>
            </div>
        </div>
    )
}

export default UserProfile