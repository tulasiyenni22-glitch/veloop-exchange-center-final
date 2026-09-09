import { motion } from 'framer-motion';
import portalArtwork from '../../assets/exchange-portal.png';
import BalanceOverview from './BalanceOverview';
import styles from './Exchange.module.css';
export default function ExchangeHero({balances}){return <section className={styles.hero}><BalanceOverview balances={balances}/><div className={styles.heroCopy}><h1>Exchange Center</h1><p>Turn your earned rewards into value</p><small>Convert eligible rewards and continue your reward journey.</small></div><motion.img className={styles.portalArtwork} src={portalArtwork} alt="Purple reward crystal converting through a golden portal into a reward coin" animate={{y:[0,-5,0]}} transition={{duration:3.2,repeat:Infinity,ease:'easeInOut'}}/></section>}
