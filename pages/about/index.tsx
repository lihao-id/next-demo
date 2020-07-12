import Head from 'next/head'
import styles from './index.module.scss'

export default function Index() {
    return (
        <div className="container">
            <Head>
                <title>about</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>

            <main>
                <div className={styles.name}>
                    张三
                    <div className={styles.red}>
                        李四
                    </div>
                </div>
            </main>
        </div>
    )
}