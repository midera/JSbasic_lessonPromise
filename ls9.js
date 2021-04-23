
function dayByday(weekdays){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(weekdays){
                console.log('wake up -go to the work')
                resolve(10000);
            }else {
                reject('drink coffee')
            }
        },1000)
})
}
function morningProcedures(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (Math.random() > .5){
                console.log('you have time')
                resolve(100)
            }else {
                reject('you are late')
            }
        },1000)
    },)
}
function breakFast(eatDone){
    console.log('Time for breakfast');
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (eatDone){
                console.log('breakfast is done')
                resolve( 1500)
            }else{
                reject('job is not done')
            }
        },1000)
    })
}
function goWork(isjobDone){
    return new Promise((resolve,reject )=>{
        setTimeout(()=>{
            if (isjobDone){
                console.log('job is done')
                resolve(500)
            }else{
                reject('job is not done')
            }
        },1000)
    })
}
function buyBread(money){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(money > 200){
                console.log('buy bread')
                resolve(money -200)
            }else {
                reject('no money go to home')
            }

        },500)})
}
function clearHouse(clearH){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(clearH > 200){
                console.log('plus in karma')
                resolve(clearH +20)
            }else {
                reject('karma is bad')
            }

        },1500)

    })
}
function goTotraine(energy){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (energy +200){
                console.log('workout')
                resolve(energy>=200)
            }else {
                reject('i am tired')
            }

        },1000)
    })
}
function fridayDrinkBeer(beer){
    return new Promise((resolve, reject) => {
       const money = 500;
        const priceofBeer=1000;
        setTimeout(()=>{
            if(money< priceofBeer){
                console.log('drink beer');
                resolve( beer -1000)
            }else{
                reject('dont money go home')
            }
        },1500)
    })
}
function goToHome(road){
    return new Promise((resolve, reject) => {
        const moneyonBeer=500;
        setTimeout(()=>{
           if (moneyonBeer > -500) {
               console.log('go home')
               resolve(road -100)
           }else{
               reject('non stop ')
           }
        },1000)
    })

}

dayByday(true)
    .then(value=>{
        console.log(value)
        return breakFast(value)
    })
    .then(value => {
        console.log(value)
       return  morningProcedures();
    })
    .catch(err=>{
        console.warn(err);
    })
    .then(value => {
        console.log(value)
        return goWork(value)
    })
    .then(value => {
        console.log(value)
        return buyBread(value)
    })
    .then(value => {
        console.log(value)
        return clearHouse(value)
    })
    .then(value => {
        console.log(value)
        return goTotraine(value)
    })
    .then(value => {
        console.log(value)
        return fridayDrinkBeer(value)
    })
    .then(value => {
        console.log(value)
        return goToHome(value)
    })
    .catch(err=>{
        console.warn(err);
    })
    .finally(()=>{
        console.log('Finaly')
    })