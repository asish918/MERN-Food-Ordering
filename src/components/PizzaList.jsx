import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus consequatur ipsa quas ullam minus, sint placeat architecto aliquam necessitatibus earum, quod culpa. Cupiditate voluptate porro natus dignissimos! Laudantium quasi reprehenderit id ea? Culpa aspernatur dolore quos deleniti natus dolor quaerat?
            </p>

            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}

export default PizzaList