function delayedMessage (){
    setTimeout(()=>{
        console.log('hello from time out');
    }, 2000);
}

//delayedMessage();

function countdownTimer (){
    let count = 5;
    let timer = setInterval(()=>{
        console.log(count);
        count--;
        if (count === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

countdownTimer();