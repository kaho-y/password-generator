(function(){
    'use strict';

    var btn= document.getElementById('btn');

    btn.addEventListener('click', function(){
        var n= Math.random();
        if(n < 0.05){
            this.textContent= "大吉";
        }else if(n<0.2){
            this.textContent= "中吉";
        }else{
            this.textContent= "凶";
        }
    });

    btn.addEventListener('mousedown', function(){
        this.className = 'pushed';
    });

    btn.addEventListener('mouseup', function(){
        this.className = '';
    });

}) ();

        // var results= ["大吉","中吉","凶"]
        // var n= Math.floor(Math.random()*3);
        // this.textContent= results[n];

        //switch ver.
        // switch (n){
        //     case 0:
        //         this.textContent= "大吉";
        //     break;
        //     case 1:
        //         this.textContent= "中吉";
        //     break;
        //     case 2:
        //         this.textContent= "凶";
        //}


        //if ver
        //var n= Math.foor(Math.random()*3);
        //if(n === 0){
        //    this.textContent= "大吉";
        //}else if(n === 1){
        //    this.textContent= "中吉";
        //}else{
        //    this.textContent= "凶";
        //}

  