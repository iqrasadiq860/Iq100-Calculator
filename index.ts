#!/usr/bin/env node
import inquirer from "inquirer";
    const iqCal=await inquirer.prompt([
        {
            type:"list",
            name:'operation',
            message:'elect one number to  run',
            choices:['addition','substraction','multiplication','division']
        },
        {
            type:'number',name:'value1',mesaage:'enter first value',
        },
        {
            type:'number',name:'value2',message:'enter second value',
        }
    ])
    
    if (iqCal.operation==='addition'){
          const aa= (iqCal.value1+iqCal.value2) ; 
        console.log("additon "+ aa);
    }else if(iqCal.operation==='substraction'){
        console.log(`the difference of my numbers is ${iqCal.value1-iqCal.value2}`);
    }else if(iqCal.operation==='multiplication'){
        console.log(`the product of my numbers is ${iqCal.value1*iqCal.value2}`);
    }else if(iqCal.operation==='division'){
        console.log(`the qoutient of my numbers is ${iqCal.value1/iqCal.value2}`)

    }