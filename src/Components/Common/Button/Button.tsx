import styles from './Button.module.scss'

const Button = ({ text }: { text: string }) => {
    return (
        <div className={styles.container}>{text}</div>
    )
}

export default Button