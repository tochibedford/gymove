import styles from '@styles/SearchBar.module.scss'
import SearchIcon from '@icons/search.svg'
import Image from 'next/image';

const SearchBar = () => {
    return ( 
    <div className={styles.searchContainer}>
        <div className={styles.searchIconContainer}>
            <Image src={SearchIcon} alt="search icon"/>
        </div>
        <input className={styles.searchInput} type="text" placeholder="Find something here..."/> 
    </div> 
    );
}

export default SearchBar;