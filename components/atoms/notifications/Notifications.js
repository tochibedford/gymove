import Image from 'next/image'
import notificationIcon from '@icons/notificationBell.svg'
import chatIcon from '@icons/chatIcon.svg'
import giftIcon from '@icons/giftIcon.svg'
import styles from '@styles/Notifications.module.scss'

const Notifications = ({notifications, messages, gifts}) => {
    return ( 
        <>
            <span className={styles.notificationsContainer}>
                <div className={styles.notIcon}>
                    <Image src={notificationIcon} alt="notification icon"/>
                    {notifications.length > 0 && <div className={styles.iconLight}></div>}
                </div>
                <div className={styles.notIcon}>
                    <Image src={chatIcon} alt="notification icon"/>
                    {messages.length > 0 && <div className={styles.iconLight}></div>}
                </div>
                <div className={styles.notIcon}>
                    <Image src={giftIcon} alt="notification icon"/>
                    {gifts.length > 0 && <div className={styles.iconLight}></div>}
                </div>
            </span>
        </>
     );
}
 
export default Notifications;