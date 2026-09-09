import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import ExchangeHero from './components/exchange/ExchangeHero';
import ConversionCalculator from './components/exchange/ConversionCalculator';
import ExchangeCard from './components/exchange/ExchangeCard';
import ExchangeModal from './components/exchange/ExchangeModal';
import { HowItWorks, History, Rules, StateBox } from './components/exchange/SupportingSections';
import { initialBalances, exchangeOptions, initialHistory } from './data/exchangeData';
import styles from './App.module.css';

export default function App() {
  const requestedState = new URLSearchParams(window.location.search).get('state');
  const [balances,setBalances] = useState(initialBalances);
  const [history,setHistory] = useState(initialHistory);
  const [selected,setSelected] = useState(null);
  const [processing,setProcessing] = useState(false);
  const [success,setSuccess] = useState(null);
  const [gems,setGems] = useState(28);
  const [view,setView] = useState(['loading','empty','error'].includes(requestedState) ? requestedState : 'ready');

  const confirm = () => {
    setProcessing(true);
    setTimeout(() => {
      setBalances(balance => ({ gems:balance.gems-selected.requiredGems, ves:balance.ves+selected.receiveVEs }));
      setHistory(items => [{ id:Date.now(),date:'Just now',gems:selected.requiredGems,ves:selected.receiveVEs,status:'Completed' },...items]);
      setSuccess(selected);
      setSelected(null);
      setProcessing(false);
    },900);
  };

  return <main>
    <div className={styles.shell}>
      <div className={styles.topStage}><ExchangeHero balances={balances}/></div>
      <ConversionCalculator gems={gems} setGems={setGems} max={balances.gems} onPreview={setSelected}/>
      <section className={styles.conversions}>
        <div className={styles.sectionHead}><h2>Available Conversions</h2></div>
        {view==='ready'
          ? <div className={styles.grid}>{exchangeOptions.map(option => <ExchangeCard key={option.id} option={option} balance={balances.gems} onConvert={setSelected}/>)}</div>
          : <StateBox mode={view} onRetry={()=>setView('ready')}/>}
      </section>
      <HowItWorks/>
      <div className={styles.bottom}><History items={history}/><Rules/></div>
    </div>
    {selected && <ExchangeModal option={selected} balances={balances} processing={processing} onClose={()=>setSelected(null)} onConfirm={confirm}/>}
    {success && <div className={styles.toast} role="status">
      <CheckCircle2/>
      <div><b>Conversion Complete</b><span>{success.requiredGems} Gems converted · +{success.receiveVEs} VEs added</span></div>
      <button aria-label="Continue after successful conversion" onClick={()=>setSuccess(null)}>Continue</button>
    </div>}
  </main>;
}
