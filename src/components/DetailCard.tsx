import styles from "styles/components/DetailCard.module.scss"

type detailCard = {
  identifier: string
}

const DetailCard: React.FC<detailCard> = ({identifier}) => {
  return (
    <div className={styles.detailCard}>
      <h1 className={styles.value}>{identifier}</h1>
      <p className={styles.name}>{identifier}</p>
    </div>
  )
}

export default DetailCard
