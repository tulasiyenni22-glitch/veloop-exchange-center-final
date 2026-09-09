import { useState } from 'react';
import { Info } from 'lucide-react';
import styles from './Exchange.module.css';
export default function InfoTip({label}) { const [open,setOpen]=useState(false); return <span className={styles.tip}><button type="button" aria-label={label} aria-expanded={open} onClick={()=>setOpen(value=>!value)} onBlur={()=>setOpen(false)}><Info size={15}/></button><span className={open?styles.tipOpen:''} role="tooltip">{label}</span></span>; }
