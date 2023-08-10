import Content from './CardContent/Content';

import styles from './Card.module.scss'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <Content />
            {/* <img className={styles.image} src="./assets/illustration-sign-up-desktop.svg" alt="img"></img> */}
        </div>
    )
}

export default Card;