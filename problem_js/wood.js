/*
chair ---> 3 cft
table ---> 10 cft
bed --- > 50 cft;
*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;


    const allChairWood = chairQuantity * perChairWood;
    const allTableWood = tableQuantity * perTableWood;
    const allBedWood = bedQuantity * perBedWood;
    const totalWood = allChairWood + allTableWood + allBedWood;
    return totalWood;
}

 const wood = woodQuantity(8, 6, 9);

 console.log('wood needed',wood);
 

//  shirt price calculation 