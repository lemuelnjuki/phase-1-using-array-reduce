const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//const totalBatteries =batteryBatches.reduce((assembled,batteries)=> assembled =batteries,0);
const totalBatteries = batteryBatches.reduce((x,y) => {return x +y})


