import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.box}>
      <div className={styles.text}>
        <span>제작 2022.11.07-2022.11.15</span>
        <span>Developers 양수빈</span>
      </div>
    </div>
  );
}

export default Footer;
