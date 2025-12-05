import styles from './livechat.module.scss'

export default function LiveChat() {
  return (
    <button className={styles.livechat__btn} aria-label="Open live chat">
      <span className={styles.livechat__text}>Live Chat</span>
      <img
        src="/src/assets/images/chat.png"
        alt=""
        className={styles.livechat__icon}
      />
    </button>
  )
}
