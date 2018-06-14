(function(){
    "use strict";

    var price= document.getElementById("price");
    var num= document.getElementById("num");
    var unit= document.getElementById("unit");
    var btn= document.getElementById("btn");
    var result= document.getElementById("result");
    var reset= document.getElementById("reset");

    function checkInput(){
        //^=行の先頭、＄＝行の終わり、＊＝直前の文字の０回以上の繰り返しにマッチする
        //先頭は１−９、終わりは０−９
        if(price.value.match(/^[1-9][0-9]*$/) !== null &&
            num.value.match(/^[1-9][0-9]*$/) !== null){
                //数値ならdisabledはずず
                btn.classList.remove("disabled");
            }else{
                btn.classList.add("disabled");
            }
    }
    console.log(btn);
    btn.addEventListener("click", function(){

        var payless;
        var short;
        var paymore;
        var over;
        var str;

        //disableなら処理しない
        if(this.classList.contains("disabled")=== true){
            return;
        }
        //A.300(payless)   100(short)不足     
        //b. 400　　200あまり

        payless= Math.floor(price.value/num.value/unit.value)*unit.value; //300
        short= price.value-(payless * num.value);

        paymore= Math.ceil(price.value/num.value/unit.value)*unit.value; //100
        over= Math.abs(price.value-(paymore * num.value)); //200

        str= "一人" + payless + "円だと" + short + "足りません" +
             "" + paymore + "円だと" + over + "あまります";

        result.textContent= str;

        //クリックした時にhidden外してもう一度計算するを表示する
        reset.classList.remove("hidden");

    });

    //キーボード入力するたびに数値かどうかチェックする
    price.addEventListener("keyup", checkInput);
    num.addEventListener("keyup", checkInput);

    // リセットした時の処理
    reset.addEventListener("click", function(){
        result.textContent ="ここに結果を表示します";
        //入力欄を空にする
        price.value= "";
        num.value= "";
        unit.value= "";
        btn.classList.add("disabled");
        this.classList.add("hidden");
        price.focus();
    });

    //開いた時からoriceにフォーカスあててる
    price.focus();

})();