import styles from './Button.module.scss'

const Button = ({
    text,
    func,
}: {
    text: string,
    func: Function
}) => {
    return (
        <div onClick={() => func()} className={styles.container}>{text}</div>
    )
}

export default Button