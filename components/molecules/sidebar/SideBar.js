import { useEffect, useRef, useState } from "react"
import styles from "@styles/SideBar.module.scss"
import Image from "next/image"
import Button from "@components/atoms/buttons/Button"

// icons
import DashboardIcon from '@icons/DashboardIcon.svg'
import WStatisticIcon from '@icons/WStatisticIcon.svg'
import WPlanIcon from '@icons/WPlanIcon.svg'
import DistanceMapIcon from '@icons/DistanceMapIcon.svg'
import DietMoveMenuIcon from '@icons/DietMoveMenuIcon.svg'
import PersonalBrandIcon from '@icons/PersonalBrandIcon.svg'


const SideBar = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(3) //maybe save this to local storage to improve resumability?
    const menuElement = useRef(null)
    const menuSelector = useRef(null)
    const activeMenuItemRef = useRef(activeMenuItem)

    useEffect(()=>{
        const menuItemHeightCss = parseFloat(styles.menuItemHeight)*parseFloat(getComputedStyle(document.documentElement).fontSize) //computing the menu item height using the value from the css variable and getComputedStyle to get the value of 1rem
        menuSelector.current.style.top = `${menuItemHeightCss*activeMenuItem}px`
        const menuEl = menuElement.current // .current may change by the time clean up runs, so this is better
        const activeMenuElement = menuEl.querySelector(`[item-number='${activeMenuItem}']`)
        activeMenuElement.classList.add(styles.activeMenuItem)

        const handleMouseClick = (e)=>{
            let activeMenuElement = menuEl.querySelector(`[item-number='${activeMenuItem}']`)
            activeMenuElement.classList.remove(styles.activeMenuItem)
            
            setActiveMenuItem(()=>{
                let newValue;
                if(e.target.tagName === 'DIV'){
                    newValue = parseInt(e.target.parentNode.getAttribute("item-number"))
                }else{
                    newValue = parseInt(e.target.getAttribute("item-number"))
                }
                activeMenuElement = menuEl.querySelector(`[item-number='${newValue}']`)
                activeMenuElement.classList.add(styles.activeMenuItem)
                return newValue
            })
        }

        const handleMouseOver = (e)=>{
            const currentTargetRect = e.currentTarget.getBoundingClientRect()
            const offsetYFromMenu = e.y - currentTargetRect.top
            const menuItemHeight = menuSelector.current.getBoundingClientRect().height
            menuSelector.current.style.top = `${menuItemHeight*Math.floor(offsetYFromMenu/menuItemHeight)}px`
        }

        const handleMouseOut = ()=>{
            const menuItemHeightCss = parseFloat(styles.menuItemHeight)*parseFloat(getComputedStyle(document.documentElement).fontSize)
            menuSelector.current.style.top = `${menuItemHeightCss*activeMenuItem}px`
        }

        menuEl.addEventListener("click", handleMouseClick, {passive: true})
        menuEl.addEventListener("mouseover", handleMouseOver, {passive: true})
        menuEl.addEventListener("mouseout", handleMouseOut, {passive: true})

        return ()=>{
            menuEl.removeEventListener("click", handleMouseClick, {passive: true})
            menuEl.removeEventListener("mouseover", handleMouseOver, {passive: true})
            menuEl.removeEventListener("mouseout", handleMouseOut, {passive: true})
        }
    }, [activeMenuItem])

    return ( 
        <div className={styles.container}>
            <div className={styles.title}>Main Menu</div>
            <ul className={styles.menu} ref={menuElement}>
                <div className={styles.menuSelector} ref={menuSelector}></div>
                <li className={styles.menuItem} item-number={0}>
                    <div>
                        <Image src={DashboardIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Dashboard
                    </div>
                </li>
                <li className={styles.menuItem} item-number={1}>
                    <div>
                        <Image src={WStatisticIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Workout Statistic
                    </div>
                </li>
                <li className={styles.menuItem} item-number={2}>
                    <div>
                        <Image src={WPlanIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Workout Plan
                    </div>
                </li>
                <li className={styles.menuItem} item-number={3}>
                    <div>
                        <Image src={DistanceMapIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Distance Map
                    </div>
                </li>
                <li className={styles.menuItem} item-number={4}>
                    <div>
                        <Image src={DietMoveMenuIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Diet Move Menu
                    </div>
                </li>
                <li className={styles.menuItem} item-number={5}>
                    <div>
                        <Image src={PersonalBrandIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Personal Brand
                    </div>
                </li>
            </ul>
            <div className={styles.callToAction}>
                <Button buttonType='createWorkoutButton'>Create Workout Plan Now</Button>
            </div>
            <div className={styles.endNote}>
                <div>Gymove Fitness Admin Dashboard</div>
                <div>© 2022 All Rights Reserved</div>
                <div className={styles.madeBy}>Made with ♥ by Tochi & Martins</div>
            </div>
        </div>
     )
}
 
export default SideBar