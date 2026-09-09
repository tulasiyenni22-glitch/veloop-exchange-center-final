import InfoTip from './InfoTip';
import gemArtwork from '../../assets/gem.png';
import styles from './Exchange.module.css';
export default function BalanceOverview({balances}){return <section className={styles.balances} aria-label="Reward balances"><article><img className={styles.gemArtwork} src={gemArtwork} alt="Purple Gem"/><div><p>Available Gems <InfoTip label="Gems are reward credits earned through eligible activities."/></p><strong>{balances.gems.toLocaleString()}</strong><small>Gems</small></div></article><article><span className={styles.veIcon}>VE</span><div><p>Available VEs <InfoTip label="VEs are VELOOP's virtual reward currency for eligible redemptions."/></p><strong>{balances.ves.toLocaleString()}</strong><small>VEs</small></div></article></section>}
