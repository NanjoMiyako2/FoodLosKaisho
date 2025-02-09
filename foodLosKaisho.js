  class Jigyosha {
  
  JigyoshaMei;
  Jotobutu;
  JotoRyo
  
  TodohuKen;
  SityoSon;
  

  JotoKohoJusho1;
  JotoKohoJusho2;
  JotoKohoJusho3;
  JotoKohoJusho4;
  JotoKohoJusho5;
  
  IraiShimekiriJikoku;
  
  AddStr1;
  
  constructor() {
  }
  

  
  
  setParam(){

	TextboxJigyoshaMei = document.getElementById("JigyoshaMei1");
	TextboxJotobutu = document.getElementById("Jotobutu");
	TextboxJotoRyo = document.getElementById("JotoRyo");
	
	TextboxTodohuKen = document.getElementById("TodohuKen1");
	TextboxSityoSon = document.getElementById("SityoSon1");
	
	TextboxJotoKohoJusho1 = document.getElementById("JotoKohoJusho1");
	TextboxJotoKohoJusho2 = document.getElementById("JotoKohoJusho2");
	TextboxJotoKohoJusho3 = document.getElementById("JotoKohoJusho3");
	TextboxJotoKohoJusho4 = document.getElementById("JotoKohoJusho4");
	TextboxJotoKohoJusho5 = document.getElementById("JotoKohoJusho5");

	TextboxIraiShimekiriJikoku = document.getElementById("IraiShimekiriJikoku1");
	
	TextboxAddStr = document.getElementById("AddStr1");

  
	TextboxJigyoshaMei.value=JigyoshaMei
	TextboxJotobutu.value=Jotobutu
	TextboxJotoRyo.value=JotoRyo
	

	TextboxJotoKohoJusho1.value=JotoKohoJusho1
	TextboxJotoKohoJusho2.value=JotoKohoJusho2
	TextboxJotoKohoJusho3.value=JotoKohoJusho3
	TextboxJotoKohoJusho4.value=JotoKohoJusho4
	TextboxJotoKohoJusho5.value=JotoKohoJusho5
	

	TextboxTodohuKen.value=TodohuKen
	TextboxSityoSon.value=SityoSon
	
	TextboxIraiShimekiriJikoku.value=IraiShimekiriJikoku
	
	TextboxAddStr1.value=AddStr1

  }
  
  
}


  function getJigyoshaParam(){
  
	TextboxJigyoshaMei = document.getElementById("JigyoshaMei1");
	TextboxJotobutu = document.getElementById("Jotobutu");
	TextboxJotoRyo = document.getElementById("JotoRyo");
	
	TextboxTodohuKen = document.getElementById("TodohuKen1");
	TextboxSityoSon = document.getElementById("SityoSon1");
	
	
	TextboxJotoKohoJusho1 = document.getElementById("JotoKohoJusho1");
	TextboxJotoKohoJusho2 = document.getElementById("JotoKohoJusho2");
	TextboxJotoKohoJusho3 = document.getElementById("JotoKohoJusho3");
	TextboxJotoKohoJusho4 = document.getElementById("JotoKohoJusho4");
	TextboxJotoKohoJusho5 = document.getElementById("JotoKohoJusho5");

	TextboxIraiShimekiriJikoku = document.getElementById("IraiShimekiriJikoku1");
	
	TextboxAddStr=document.getElementById("AddStr1");
	
	
	MyJigyosha.JigyoshaMei = TextboxJigyoshaMei.value;
	MyJigyosha.Jotobutu = TextboxJotobutu.value;
	MyJigyosha.JotoRyo = TextboxJotoRyo.value;
	
	MyJigyosha.JotoKohoJusho1 = TextboxJotoKohoJusho1.value;
	MyJigyosha.JotoKohoJusho2 = TextboxJotoKohoJusho2.value;
	MyJigyosha.JotoKohoJusho3 = TextboxJotoKohoJusho3.value;
	MyJigyosha.JotoKohoJusho4 = TextboxJotoKohoJusho4.value;
	MyJigyosha.JotoKohoJusho5 = TextboxJotoKohoJusho5.value;
	
	MyJigyosha.TodohuKen = TextboxTodohuKen.value;
	MyJigyosha.SityoSon = TextboxSityoSon.value;

	MyJigyosha.IraiShimekiriJikoku = TextboxIraiShimekiriJikoku.value;
	
	MyJigyosha.AddStr1=TextboxAddStr.value

	
	
  }



var textOfFile1;

//Form要素を取得する
var form = document.getElementById("myform1");
var file = document.getElementById("myfile1");
//ファイルが読み込まれた時の処理
file.addEventListener('change', function(e) {
  
  //ここにファイル取得処理を書く
  result2 = e.target.files[0];
  
    //FileReaderのインスタンスを作成する
    var reader = new FileReader();
  
    //読み込んだファイルの中身を取得する
    reader.readAsText( result2 );
  
    //ファイルの中身を取得後に処理を行う
    reader.addEventListener( 'load', function() {
    
        //ファイルの中身をtextarea内に表示する
        textOfFile1 = reader.result;    
    })

})



  function SetTextbox(){
  
	TextboxJigyoshaMei = document.getElementById("JigyoshaMei1");
	TextboxJotobutu = document.getElementById("Jotobutu");
	TextboxJotoRyo = document.getElementById("JotoRyo");
	
	TextboxTodohuKen = document.getElementById("TodohuKen1");
	TextboxSityoSon = document.getElementById("SityoSon1");
	
	
	TextboxJotoKohoJusho1 = document.getElementById("JotoKohoJusho1");
	TextboxJotoKohoJusho2 = document.getElementById("JotoKohoJusho2");
	TextboxJotoKohoJusho3 = document.getElementById("JotoKohoJusho3");
	TextboxJotoKohoJusho4 = document.getElementById("JotoKohoJusho4");
	TextboxJotoKohoJusho5 = document.getElementById("JotoKohoJusho5");
	
	TextboxAddStr=document.getElementById("AddStr1");
	

	TextboxJigyoshaMei.value=MyJigyosha.JigyoshaMei
	TextboxJotobutu.value=MyJigyosha.Jotobutu
	
	TextboxJotoKohoJusho1.value=MyJigyosha.JotoKohoJusho1
	TextboxJotoKohoJusho2.value=MyJigyosha.JotoKohoJusho2
	TextboxJotoKohoJusho3.value=MyJigyosha.JotoKohoJusho3
	TextboxJotoKohoJusho4.value=MyJigyosha.JotoKohoJusho4
	TextboxJotoKohoJusho5.value=MyJigyosha.JotoKohoJusho5
	
	TextboxTodohuKen.value=MyJigyosha.TodohuKen
	TextboxSityoSon.value=MyJigyosha.SityoSon


	TextboxIraiShimekiriJikoku.value=MyJigyosha.IraiShimekiriJikoku
	
	TextboxAddStr.value=MyJigyosha.AddStr1
		
  }
  function LoadJigyoshaParam(){
  	LoadJigyoshaParamFromJsonFile(textOfFile1);
  }
  
  function MakeJigyoShaInfoStr(){
  
  	getJigyoshaParam();
  	
  	ret1 = "";
  	ret1 += "事業者名:" + MyJigyosha.JigyoshaMei + "\r\n"
  	ret1 += "譲渡物:" + MyJigyosha.Jotobutu +"\r\n"
	ret1 += "一軒当たりの譲渡量" + ":" + MyJigyosha.JotoRyo + "\r\n"
	
	ret1 += "都道府県" + ":" + MyJigyosha.TodohuKen + "\r\n"
	ret1 += "市町村" + ":" + MyJigyosha.SityoSon + "\r\n"
	
	ret1 += "譲渡候補住所1" + ":" + MyJigyosha.JotoKohoJusho1 + "\r\n"
	ret1 += "譲渡候補住所2" + ":" + MyJigyosha.JotoKohoJusho2 + "\r\n"
	ret1 += "譲渡候補住所3" + ":" + MyJigyosha.JotoKohoJusho3 + "\r\n"
	ret1 += "譲渡候補住所4" + ":" + MyJigyosha.JotoKohoJusho4 + "\r\n"
	ret1 += "譲渡候補住所5" + ":" + MyJigyosha.JotoKohoJusho5 + "\r\n"
	
	ret1 += "譲渡締め切り時刻" + ":" + MyJigyosha.IraiShimekiriJikoku + "\r\n"
	
	ret1 += "\r\n\r\n";
	
	ret1 += MyJigyosha.AddStr1
	
	ret1 += "\r\n\r\n";
		
    var now2 = new Date();
    var nowYear2 = now2.getFullYear();
    var nowMonth2 = now2.getMonth();
    var nowDate2 = now2.getDate();
    
	ret1 += "#フードロス解消ネットロ"+nowYear2 +"年"+nowMonth2+"月"+nowDate2+"日"+"ロ";
	ret1 += "\r\n";
	ret1 += "#フードロス解消ネットロ"+MyJigyosha.JigyoshaMei+"ロ";
	ret1 += "\r\n";
	ret1 += "#フードロス解消ネットロ"+MyJigyosha.TodohuKen+"ロ";
	ret1 += "\r\n";
	ret1 += "#フードロス解消ネットロ"+MyJigyosha.SityoSon+"ロ";
	ret1 += "\r\n";
	
  	return ret1;
  }
  
function OutputStr(){
	str1 = MakeJigyoShaInfoStr();
	
	textArea1 = document.getElementById("TextArea1");
	textArea1.value = str1
	
}

function LoadSaveDataFile(){

	LoadGameDataFromJsonFile(textOfFile1)
}

function LoadGameDataFromJsonFile(JsonFileText1){

	text1 = JsonFileText1
	
	MyJigyosha = JSON.parse(text1)

	NowTime1 = showTime();
	ShimeTime1 = new Date();
	ShimeTime1 = addTime(ShimeTime1);
	ShimeTimeStr1 = getTimeStr2(ShimeTime1)

    IraiKaishiJikoku = NowTime1;
    IraiShimekiriJikoku = ShimeTimeStr1;
    
    MyJigyosha.IraiKaishiJikoku = NowTime1;
    MyJigyosha.IraiShimekiriJikoku = ShimeTimeStr1;
    
    SetTextbox();
	
	alert('事業者情報を読み込みました')

}

function saveJigyoshaParam2(){

	getJigyoshaParam();
	saveJigyoshaParam(MyJigyosha);
}
  
function saveJigyoshaParam(Jigyosha1){
  
  SaveAsTextFile(JSON.stringify(Jigyosha1), "saveFoodLosKaishoJigyosha1.txt");
  
  alert('事業者データを保存しました');
  
  
  
 }

	function SaveAsTextFile(text, filename){
	  const blob = new Blob([text], { type: 'text/plain' });
	  const blobUrl = window.URL.createObjectURL(blob);
	  const link = document.createElement('a');
	  link.href = blobUrl;
	  link.download = filename;
	  link.click();
	  
	}
  
  function showTime() {
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth();
    var nowDate = now.getDate();
    var nowhour = now.getHours();
    var nowminutes = now.getMinutes();
    var nowseconds = now.getSeconds();
  
    var text = nowYear+"." +nowMonth +"."+nowDate+"";
    
    
    return text;
  }
  
  function addTime(Time1){
  	ret = Time1.setHours( Time1.getHours() + 25)
  	return new Date(ret)
  }
  
  function getTimeStr(Time1){
	    var Year1 = Time1.getFullYear();
	    var Month1 = Time1.getMonth()+1;
	    var Date1 = Time1.getDate();
	    var Hour1 = Time1.getHours();
	    var Minutes1 = Time1.getMinutes();
	    var Seconds1 = Time1.getSeconds();
	  
	    var text = Year1+"." +Month1 +"."+Date1+"."
	    + Hour1 + ":" + Minutes1 + ":" + Seconds1; 
	    
	    return text
  }
  
  function getTimeStr2(Time1){
	    var Year1 = Time1.getFullYear();
	    var Month1 = Time1.getMonth()+1;
	    var Date1 = Time1.getDate();
	    var Hour1 = Time1.getHours();
	    var Minutes1 = Time1.getMinutes();
	    var Seconds1 = Time1.getSeconds();
	  
	    var text = Year1+"." +Month1 +"."+Date1+""
	    
	    return text
  }
  
  function AddOneHour(){
    Time1 = ShimeTime1
  	Time2 = addTime(Time1)
  	TimeStr2 = getTimeStr(Time2);
  	
  
	Textbox2 = document.getElementById("IraiShimekiriJikoku1");
	Textbox2.value = TimeStr2
	
  }
  
  function ResetHour(){
    Time1 = new Date();
    
  	Time2 = addTime(Time1)
  	TimeStr2 = getTimeStr2(Time2);
  	
  
	Textbox2 = document.getElementById("IraiShimekiriJikoku1");
	Textbox2.value = TimeStr2
  }
  
  function OutputJigyoShaStr(){
  }


MyJigyosha = new Jigyosha();
  
NowTime1 = showTime();
ShimeTime1 = new Date();
ShimeTime1 = addTime(ShimeTime1);
ShimeTimeStr1 = getTimeStr2(ShimeTime1)



Textbox2 = document.getElementById("IraiShimekiriJikoku1");
Textbox2.value = ShimeTimeStr1


getJigyoshaParam()

