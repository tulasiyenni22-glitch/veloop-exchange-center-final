export const initialBalances = { gems: 420, ves: 3850 };
export const exchangeOptions = [
  { id:'best', label:'Best Value', requiredGems:28, receiveVEs:151, accent:'purple' },
  { id:'popular', label:'Popular', requiredGems:56, receiveVEs:290, accent:'blue' },
  { id:'high', label:'High Conversion', requiredGems:150, receiveVEs:820, accent:'green', available:true }
];
export const initialHistory = [
  { id:1, date:'18 May 2025', gems:28, ves:151, status:'Completed' },
  { id:2, date:'16 May 2025', gems:56, ves:290, status:'Completed' },
  { id:3, date:'14 May 2025', gems:14, ves:74, status:'Completed' }
];
