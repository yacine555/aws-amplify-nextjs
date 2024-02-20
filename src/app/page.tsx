import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        This is a Nextjs 14 test project to deploy in AWS amplify
      </div>
    </main>
  );
}
