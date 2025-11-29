import styles from './NavBar.module.css';

const NavBar = () => {

    return (
        <nav>
            <h1 className={styles.title}> 📦 WELCOME TO THE HONORS INVENTORY SYSTEM</h1>
            <div className={styles.navButtons}>
            <button className={styles.navButton}> By Items  </button>
            <button className={styles.navButton}> By Location </button>
            </div>
        </nav>
    );
};

export default NavBar;