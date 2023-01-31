import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/pizza.png" alt='pizza' width='300' height='300' />
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.99</span>
            <p className={styles.desc}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque.
            </p>
        </div>
    )
}

export default PizzaCard