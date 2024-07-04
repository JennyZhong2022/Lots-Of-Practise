import styles from './FlexBox.module.scss';



const FlexBox = ({children}) => {
  return (
    <div className={styles.flexBox}>{children}</div>
  )
}

export default FlexBox