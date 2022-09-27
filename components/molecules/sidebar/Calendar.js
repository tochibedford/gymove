import styles from "@styles/Calendar.module.scss"

const Calendar = () => {
    // const currentDate = new Date()
    // const month  =  currentDate.toLocaleString('default', { month: 'long' })
    // const weekday = currentDate.toLocaleString('default', { weekday: 'long' })
    // console.log(month, weekday, currentDate.setDate(1))
    // console.log(currentDate)
    return ( 
        <div className={styles.calendarContainer}>
            <div className={styles.left}>{"<"}</div> 
            <div className={styles.monthYear}>
                <div>September</div>
                <div>2020</div>
            </div>
            <div className={styles.right}>{">"}</div>

            <div className={styles.days}>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                <div>Sun</div>
            </div>

            <div className={styles.calendarNumbers}>
                <div className={`${styles.calendarNumber} ${styles.prev}`}>28</div>
                <div className={`${styles.calendarNumber} ${styles.prev}`}>29</div>
                <div className={`${styles.calendarNumber} ${styles.prev}`}>30</div>
                <div className={`${styles.calendarNumber} ${styles.prev}`}>31</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>1</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>2</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>3</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>4</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>5</div>
                <div className={`${styles.calendarNumber} ${styles.curr} ${styles.event}`}>6</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>7</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>8</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>9</div>
                <div className={`${styles.calendarNumber} ${styles.curr} ${styles.event}`}>10</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>11</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>12</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>13</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>14</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>15</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>16</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>17</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>18</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>19</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>20</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>21</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>22</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>23</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>24</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>25</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>26</div>
                <div className={`${styles.calendarNumber} ${styles.curr} ${styles.active}`}>27</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>28</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>29</div>
                <div className={`${styles.calendarNumber} ${styles.curr}`}>30</div>
                <div className={`${styles.calendarNumber} ${styles.next}`}>1</div>
                <div className={`${styles.calendarNumber} ${styles.next}`}>2</div>
                <div className={`${styles.calendarNumber} ${styles.next}`}>3</div>
                <div className={`${styles.calendarNumber} ${styles.next}`}>4</div>
                <div className={`${styles.calendarNumber} ${styles.next}`}>5</div>
                <div className={`${styles.calendarNumber} ${styles.next}`}>6</div>
                <div className={`${styles.calendarNumber} ${styles.next}`}>7</div>
                <div className={`${styles.calendarNumber} ${styles.next}`}>8</div>
            </div>
        </div>
    );
}
 
export default Calendar;