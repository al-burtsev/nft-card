import Popover from '../Popover/Popover'
import equilibrium from '/src/assets/image-equilibrium.jpg';
import avatar from '/src/assets/image-avatar.png';
import styles from './Card.module.scss'

const Card = () => {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <button type='button' popoverTarget="popover"
          popoverTargetAction="show" aria-label='Open Equilibrium image'>
          <img src={equilibrium} alt="NFT Equilibrium image" />
        </button>
      </div>
      <div className={styles.middle}>
        <h2 className={styles.title}><a href="#!">Equilibrium #3429</a></h2>
        <p className={`${styles.description} text-accent-2`}>Our Equilibrium collection promotes balance and calm.
        </p>
        <div className={styles.info}>
          <div className={`${styles.price} text-accent-1`}>0.041 ETH</div>
          <div className={`${styles.countdown} text-accent-2`}>3 days left</div>
        </div>
        <hr className={styles.line} />
      </div>
      <div className={styles.bottom}>
        <picture>
          <img className={styles.avatar} src={avatar} alt="Photo of Jules Wyvern" />
        </picture>
        <p className={styles.author}><span className='text-accent-2'>Creation of</span> <a href="#!">Jules Wyvern</a>
        </p>
      </div>
      <Popover id="popover">
        <div className="popover-inner">
          <button className='popover-close' popoverTarget="popover" popoverTargetAction="hide">
            <span aria-hidden="true">❌</span>
            <span className="sr-only">Close</span>
          </button>
          <img src={equilibrium} alt="NFT Equilibrium image" />
        </div>
      </Popover>
    </article>
  )
}

export default Card