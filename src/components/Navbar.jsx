import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity)

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/telephone.png" alt="telephone" width="32" height="32" />
                </div>

                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>012 345 678</div>
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/">
                        <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/logo3.png" alt="logo" width="160" height="96" />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>

            <div className={styles.item}>
                <Link target='_blank' href="https://github.com/asish918/MERN-Food-Ordering">
                    <div className={styles.cart}>
                        <Image src="/github.png" alt="logo" width="30" height="30" />
                    </div>
                </Link>
                <Link href="/cart">
                    <div className={styles.cart}>
                        <Image src="/cart.png" alt="logo" width="30" height="30" />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar