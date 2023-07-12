import styles from './Layout.module.scss';
import Header from './Header';
import Footer from './Footer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal'],
});

function Layout(props: any) {
  return (
    <div className={`${styles.app} ${inter.className}`}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
