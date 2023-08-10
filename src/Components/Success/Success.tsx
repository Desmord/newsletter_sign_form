import Button from '../Common/Button/Button'

import styles from './Success.module.scss'

const Success = ({ setIsSuccess }: { setIsSuccess: Function }) => {
    return (
        <div className={styles.container}>
            <img src="./assets/icon-success.svg" alt="img"></img>
            <div className={styles.tittle}>
                Thanks for subscribing!
            </div>
            <div className={styles.description}>
                A confiramtion email has been sent to email@example.com. Please open it and
                click the button inside to confirm your subscription.
            </div>
            <div className={styles.button}>
                <Button func={setIsSuccess} text={`Dismiss message`} />
            </div>
        </div>
    )
}

export default Success