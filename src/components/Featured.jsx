import styles from '../styles/Featured.module.css'
import {useState} from 'react'
import Image from 'next/image'

const Featured = () => {
    const [index, setIndex] = useState(0);
    
    const images = [
        '/featured.png',
        '/featured2.png',
        '/featured3.png'
    ];

    const handleArrow = (direction) => {
        if(direction === 'l'){
            setIndex(index !== 0 ? index-1 : 2)
        }

        if(direction === 'r'){
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")} >
                <Image src='/arrowl.png' alt='arrow' layout='fill' objectFit='contain' />
            </div>

            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img, index) => (
                    <div key={index} className={styles.imgContainer}>
                        <Image src={img} alt='featured' layout='fill' objectFit='contain' />
                    </div>
                ))}
            </div>

            <div className={styles.arrowContainer} style={{ right: 0 }}>
                <Image src='/arrowr.png' alt='arrow' layout='fill' objectFit='contain' onClick={() => handleArrow("r")} />
            </div>
        </div>
    )
}

export default Featured