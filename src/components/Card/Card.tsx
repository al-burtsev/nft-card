import styles from './Card.module.scss'

const Card = () => {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <picture>
          <img src="/src/assets/image-equilibrium.jpg" alt="NFT Equilibrium image" />
        </picture>
      </div>
      <div className={styles.middle}>
        <h2 className={styles.title}>Equilibrium #3429</h2>
        <p className={styles.descr}>Our Equilibrium collection promotes balance and calm.
        </p>
        <div className={styles.info}>
          <div className={styles.price}>0.041 ETH</div>
          <div className={styles.countdown}>3 days left</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <picture className={styles.avatar}>
          <img src="/src/assets/image-avatar.png" alt="Photo of Jules Wyvern" />
        </picture>
        <p className={styles.author}>Creation of Jules Wyvern
        </p>
      </div>
    </article>
  )
}

export default Card