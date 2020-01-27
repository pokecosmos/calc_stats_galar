//メガシンカボタンの変更
function mega_button(){
	var p = document.nForm.elements['pokename'].value;
	if((p=="ギルガルド")||(p=="ギルガルド(ブレード)")||(p=="ギルガルド(シールド)")){
		visi(2, "ブレード", "シールド");
	}else if((p=="ヒヒダルマ")||(p=="ヒヒダルマ(通常)")||(p=="ヒヒダルマ(ダルマ)")){
		visi(2, "通常", "ダルマ");
	}else if((p=="コオリッポ")||(p=="コオリッポ(アイス)")||(p=="コオリッポ(ナイス)")){
		visi(2, "アイス", "ナイス");
	}else if((p=="イエッサン")||(p=="イエッサン♂")||(p=="イエッサン♀")){
		visi(2, "♂", "♀");
	}else if((p=="ヨワシ")||(p=="ヨワシ(単独)")||
		(p=="ヨワシ(群れ)")){
		visi(2, "単独", "群れ");
	}else if((p=="バケッチャ")||(p=="バケッチャ(特大)")||(p=="バケッチャ(大きい)")||(p=="バケッチャ(普通)")||(p=="バケッチャ(小さい)")||
		(p=="パンプジン")||(p=="パンプジン(特大)")||(p=="パンプジン(大きい)")||(p=="パンプジン(普通)")||(p=="パンプジン(小さい)")){
		visi(4, "特大", "大きい", "普通", "小さい");
	}else if((p=="ロトム")||(p=="ロトム(ノーマル)")||(p=="ロトム(FC)")){
		visi(2, "ノーマル", "ＦＣ");
	}else if((p=="ニャース")||(p=="ニャース(通常)")||(p=="ニャース(ガラル)")||
		(p=="バリヤード")||(p=="バリヤード(通常)")||(p=="バリヤード(ガラル)")||
		(p=="デスマス")||(p=="デスマス(通常)")||(p=="デスマス(ガラル)")){
		visi(2, "通常", "ガラル");
	}else{
		visi(0);
	}
}

function visi(num, var1, var2, var3, var4){
	if(num == 0){
		document.nForm.elements['mega0'].style.visibility="hidden";
		document.nForm.elements['mega1'].style.visibility="hidden";
		document.nForm.elements['mega2'].style.visibility="hidden";
		document.nForm.elements['mega3'].style.visibility="hidden";
		document.nForm.elements['mega0'].style.width = 70;
		document.nForm.elements['mega1'].style.width = 70;
	}else if(num == 2){
		document.nForm.elements['mega0'].value = var1;
		document.nForm.elements['mega1'].value = var2;
		document.nForm.elements['mega0'].style.visibility="visible";
		document.nForm.elements['mega1'].style.visibility="visible";
		document.nForm.elements['mega2'].style.visibility="hidden";
		document.nForm.elements['mega3'].style.visibility="hidden";
		document.nForm.elements['mega0'].style.width = 70;
		document.nForm.elements['mega1'].style.width = 70;
		document.nForm.elements['mega2'].style.width = 70;
	}else if(num == 4){
		document.nForm.elements['mega0'].value = var1;
		document.nForm.elements['mega1'].value = var2;
		document.nForm.elements['mega2'].value = var3;
		document.nForm.elements['mega3'].value = var4;
		document.nForm.elements['mega0'].style.visibility="visible";
		document.nForm.elements['mega1'].style.visibility="visible";
		document.nForm.elements['mega2'].style.visibility="visible";
		document.nForm.elements['mega3'].style.visibility="visible";
		document.nForm.elements['mega0'].style.width = 60;
		document.nForm.elements['mega1'].style.width = 60;
		document.nForm.elements['mega2'].style.width = 60;
		document.nForm.elements['mega3'].style.width = 60;
	}
}

//メガシンカボタン
function megachange(num){
	var p = document.nForm.elements['pokename'].value;
	if((p=="ギルガルド")||(p=="ギルガルド(ブレード)")||(p=="ギルガルド(シールド)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ギルガルド(ブレード)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ギルガルド(シールド)";
 		}
 	}else if((p=="ヒヒダルマ")||(p=="ヒヒダルマ(通常)")||(p=="ヒヒダルマ(ダルマ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ヒヒダルマ(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ヒヒダルマ(ダルマ)";
 		}
 	}else if((p=="コオリッポ")||(p=="コオリッポ(アイス)")||(p=="コオリッポ(ナイス)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="コオリッポ(アイス)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="コオリッポ(ナイス)";
 		}
 	}else if((p=="イエッサン")||(p=="イエッサン♂")||(p=="イエッサン♀")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="イエッサン♂";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="イエッサン♀";
 		}
 	}else if((p=="ヨワシ")||(p=="ヨワシ(単独)")||(p=="ヨワシ(群れ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ヨワシ(単独)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ヨワシ(群れ)";
 		}
 	}else if((p=="バケッチャ")||(p=="バケッチャ(特大)")||(p=="バケッチャ(大きい)")||(p=="バケッチャ(普通)")||(p=="バケッチャ(小さい)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="バケッチャ(特大)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="バケッチャ(大きい)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="バケッチャ(普通)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="バケッチャ(小さい)";
 		}
 	}else if((p=="パンプジン")||(p=="パンプジン(特大)")||(p=="パンプジン(大きい)")||(p=="パンプジン(普通)")||(p=="パンプジン(小さい)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="パンプジン(特大)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="パンプジン(大きい)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="パンプジン(普通)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="パンプジン(小さい)";
 		}
	}else if((p=="ロトム")||(p=="ロトム(ノーマル)")||(p=="ロトム(FC)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ロトム(ノーマル)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ロトム(FC)";
 		}
 	}else if((p=="ニャース")||(p=="ニャース(通常)")||(p=="ニャース(ガラル)")||
		(p=="バリヤード")||(p=="バリヤード(通常)")||(p=="バリヤード(ガラル)")||
		(p=="デスマス")||(p=="デスマス(通常)")||(p=="デスマス(ガラル)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(ガラル\)/g,"");
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(通常\)/g,"");
 			document.nForm.elements['pokename'].value= "" + document.nForm.elements['pokename'].value + "(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(ガラル\)/g,"");
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(通常\)/g,"");
 			document.nForm.elements['pokename'].value= "" + document.nForm.elements['pokename'].value + "(ガラル)";
 		}
	}
	setpokemon();
}