import Content from './CardContent/Content';

import styles from './Card.module.scss'

const Card = ({ setIsSuccess }: { setIsSuccess: Function }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <Content setIsSuccess={setIsSuccess}/>
        </div>
    )
}

export default Card;