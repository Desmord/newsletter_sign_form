import { useState } from 'react'
import Button from '../../Common/Button/Button'

import styles from './Content.module.scss'

const Content = ({ setIsSuccess }: { setIsSuccess: Function }) => {
    const [inputValue, setinputValue] = useState(``);
    const [isError, setIsError] = useState(false);

    const isValidEmail = (email: string): boolean => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleClick = () => {

        if (isValidEmail(inputValue)) {
            setIsError(false)
            setIsSuccess(true)
        } else {
            setIsError(true)
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Stay updated!</div>
            <div className={styles.description}>Join 60,000+ product managers receiving monthly updates on:</div>
            <div className={styles.bullets}>
                <span><img src="./assets/icon-list.svg" alt="img"></img> Product discovery and building what matters</span>
                <span><img src="./assets/icon-list.svg" alt="img"></img> Measuring to ensure updates are a success</span>
                <span><img src="./assets/icon-list.svg" alt="img"></img> And much more!</span>
            </div>
            <div className={styles.emailTexts}>
                <span>Email address</span>
                {isError ? <span>Valid email required</span> : ``}
            </div>
            <input
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
                className={isError ? `${styles.input} ${styles.inputError}` : styles.input}
                placeholder='email@company.com'>
            </input>
            <div className={styles.button}>
                <Button func={handleClick} text={`Subscribe to monthly newsletter`} />
            </div>
        </div>
    )
}

export default Content