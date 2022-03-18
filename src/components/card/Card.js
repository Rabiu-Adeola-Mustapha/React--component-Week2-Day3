import styles from "./Card.module.css";

const Card = () => {


    return(
        <div className={styles.card}>
            <img src="./images/medicine.jpg" alt="" className={styles.card__image} />
            <h3 className={styles.card__title}>Lorem ipsum dolor sit amet.</h3>
            <p className={styles.card__desc}>Brief Description:</p>
            <botton className={styles.card__btn}>Add a cart</botton>


        </div>
    );
};

export default Card;