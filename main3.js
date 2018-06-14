(function(){
  "use strict";
  //id取得
  
  var btn= document.getElementById("btn");
  var elem = document.getElementById('range');
  var target = document.getElementById('value');
  var number= document.getElementById('number').checked;
  var symbol= document.getElementById('symbol').checked;
  var list= document.getElementById('passlist');
  console.log(number);
  console.log(symbol);
  console.log(list);

  //パスワード生成処理
  btn.addEventListener("click",function(){
    var letters= "abcdefghijklmnopqrstuvwxyz";
    var capital= letters.toUpperCase();
    var alphabet=letters + capital;
    var password= ""; //文字列が空
    var numbers= "1234567890";
    var symbols= "!#$%&";
    var len= document.forms.slider.range.value;
    
    var number= document.getElementById('number').checked;
    var symbol= document.getElementById('symbol').checked;
    // console.log(number);
    // console.log(symbol);
    var td= document.getElementsByTagName("td");
    // console.log(td);
    
    for(var a=0;a<td.length; a++){
      for(var i=0; i<len; i++){
        if(number == true && symbol == true){
          //両方
          var strings= alphabet + numbers + symbols; 
          password += strings.charAt(Math.floor(Math.random()*strings.length));
        
        }else if(number == true){
          //数字のみ
          var strings1= alphabet + numbers;
          password += strings1.charAt(Math.floor(Math.random()*strings1.length));
          
        }else if(symbol == true){
          //記号のみ
          var strings2= alphabet + symbols;
          password += strings2.charAt(Math.floor(Math.random()*strings2.length));
          
        }else{ 
          //アルファベット26文字を選んで代入
          password += alphabet.charAt(Math.floor(Math.random()*alphabet.length));
        }
      } 
      td[a].innerText=password;
      password = "";
    }



    // password=pass.innerText;
    // td[0].select();
    // console.log(td[0]);
    // document.execCommand("copy");

    var element = document.getElementById("td1").firstChild;
    // console.log(element);
    //rangeオブジェクトの作成
    var range = document.createRange();
    // console.log(range);
    //取得した要素の内側を範囲とする
    range.selectNodeContents(element);
    //範囲を選択状態にする
    window.getSelection().addRange(range);
    document.execCommand("copy");
    console.log(document.execCommand("copy"));  

    // function copyTextToClipboard(textVal){
    //   // テキストエリアを用意する
    //   var copyFrom = document.getElementById("passbox2");
    //   // テキストエリアへ値をセット
    //   copyFrom.textContent = textVal;
     
    //   // bodyタグの要素を取得
    //   var bodyElm = document.getElementsByTagName("td")[0];
    //   // 子要素にテキストエリアを配置
    //   bodyElm.appendChild(copyFrom);
     
    //   // テキストエリアの値を選択
    //   copyFrom.select();
    //   // コピーコマンド発行
    //   var retVal = document.execCommand('copy');
    //   // 追加テキストエリアを削除
    //   bodyElm.removeChild(copyFrom);
    //   // 処理結果を返却
    //   return retVal;
    // }
     

    
    //パスワードをテキストに表示
    // document.getElementById( "passbox2" ).value = password;
    
    
    // console.log(password);
  });

  
  
  
  

  //スライドバーの処理
  var rangeValue = function (elem, target) {
    return function(evt){
      target.innerHTML = elem.value;
      //innnerHTML=HTMLタグの中身を読み込んだり、または上書きをする
    }
  }
  elem.addEventListener('input', rangeValue(elem, target));
  
        
    
        
      
   

})();