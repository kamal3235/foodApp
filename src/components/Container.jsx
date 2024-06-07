// structural component not functional component
import styles from "./Container.module.css";


export default function Container({ children }) {
    return <div className={styles.parentContainer}>{children}</div>
}