import styles from "./Container.module.css";
import Card from "../card/Card";

const Container = () => {
    return(
        <div className={styles.container}>
            <Card />
        </div>
    );

};

export default Container;