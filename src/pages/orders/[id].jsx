import styles from '../../styles/Order.module.css'
import Image from 'next/image'

const Order = () => {

    const status = 0;
    
    const statusClass = (index) => {
        if(index - status < 1) return styles.done
        if(index - status === 1) return styles.inProgress
        if(index - status > 1) return styles.undone
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.tr}>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span className={styles.id}>1234512312</span>
                                </td>
                                <td>
                                    <span className={styles.name}>
                                        John Doe
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.address}>Area 51, Nevada, United States</span>
                                </td>
                                <td>
                                    <span className={styles.total}>$79.00</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src='/paid.png' width={30} height={30} alt='icon' />
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                            <Image src='/checked.png' width={20} height={20} alt='icon' />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src='/bake.png' width={30} height={30} alt='icon' />
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}>
                            <Image src='/checked.png' width={20} height={20} alt='icon' />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src='/bike.png' width={30} height={30} alt='icon' />
                        <span>On the way</span>
                        <div className={styles.checkedIcon}>
                            <Image src='/checked.png' width={20} height={20} alt='icon' />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src='/delivered.png' width={30} height={30} alt='icon' />
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}>
                            <Image src='/checked.png' width={20} height={20} alt='icon' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal</b>$79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$79.60
                    </div>
                    <button disabled className={styles.button}>PAID</button>
                </div>
            </div>
        </div>
    )
}

export default Order