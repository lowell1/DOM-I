let go = false;

let btn = document.getElementById("myBtn");

let cnt = 0;

let timer;

btn.addEventListener("click", function() {
    go = !go;

    if(go) {
        btn.innerHTML = "Stop";
        timer = setInterval(function() {
            if(cnt >= 9999)
                clearInterval(timer);

            document.getElementById("msTens").innerHTML = cnt % 10;
            document.getElementById("msHundreds").innerHTML = Math.floor(cnt / 10) % 10;
            document.getElementById("secondOnes").innerHTML = Math.floor(cnt / 100) % 10;
            document.getElementById("secondTens").innerHTML = Math.floor(cnt / 1000) % 10;
            cnt++;
        }, 10);
    } else {
        btn.innerHTML = "Start";
        clearInterval(timer);
        cnt = 0;
    }
})

/*
<div class="digit" id="secondTens">-</div>
      <div class="digit" id="secondOnes">-</div>
      <div class="digit" id="colon">:</div>
      <div class="digit" id="msHundreds">-</div>
      <div class="digit" id="msTens">-</div>
      */