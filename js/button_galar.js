//メガシンカボタンの変更
function mega_button(){
	if((document.nForm.elements['pokename'].value=="ギルガルド")||
		(document.nForm.elements['pokename'].value=="ギルガルド(ブレード)")||
		(document.nForm.elements['pokename'].value=="ギルガルド(シールド)")){
		document.nForm.elements['mega0'].value="ブレード";
		document.nForm.elements['mega1'].value="シールド";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="ヒヒダルマ")||
		(document.nForm.elements['pokename'].value=="ヒヒダルマ(通常)")||
		(document.nForm.elements['pokename'].value=="ヒヒダルマ(ダルマ)")){
		document.nForm.elements['mega0'].value="通常";
		document.nForm.elements['mega1'].value="ダルマ";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="コオリッポ")||
		(document.nForm.elements['pokename'].value=="コオリッポ(アイス)")||
		(document.nForm.elements['pokename'].value=="コオリッポ(ナイス)")){
		document.nForm.elements['mega0'].value="アイス";
		document.nForm.elements['mega1'].value="ナイス";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="イエッサン")||
		(document.nForm.elements['pokename'].value=="イエッサン♂")||
		(document.nForm.elements['pokename'].value=="イエッサン♀")){
		document.nForm.elements['mega0'].value="♂";
		document.nForm.elements['mega1'].value="♀";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="ヨワシ")||
		(document.nForm.elements['pokename'].value=="ヨワシ(単独)")||
		(document.nForm.elements['pokename'].value=="ヨワシ(群れ)")){
		document.nForm.elements['mega0'].value="単独";
		document.nForm.elements['mega1'].value="群れ";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="バケッチャ")||
		(document.nForm.elements['pokename'].value=="バケッチャ(特大)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(大きい)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(普通)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(小さい)")){
		document.nForm.elements['mega0'].value="特大";
		document.nForm.elements['mega1'].value="大きい";
		document.nForm.elements['mega2'].value="普通";
		document.nForm.elements['mega3'].value="小さい";
		visi(4);
	}else if((document.nForm.elements['pokename'].value=="パンプジン")||
		(document.nForm.elements['pokename'].value=="パンプジン(特大)")||
		(document.nForm.elements['pokename'].value=="パンプジン(大きい)")||
		(document.nForm.elements['pokename'].value=="パンプジン(普通)")||
		(document.nForm.elements['pokename'].value=="パンプジン(小さい)")){
		document.nForm.elements['mega0'].value="特大";
		document.nForm.elements['mega1'].value="大きい";
		document.nForm.elements['mega2'].value="普通";
		document.nForm.elements['mega3'].value="小さい";
		visi(4);
	}else if((document.nForm.elements['pokename'].value=="ロトム")||
		(document.nForm.elements['pokename'].value=="ロトム(ノーマル)")||
		(document.nForm.elements['pokename'].value=="ロトム(FC)")){
		document.nForm.elements['mega0'].value="ノーマル";
		document.nForm.elements['mega1'].value="FC";
		visi(2);
	}else if((document.nForm.elements['pokename'].value=="ニャース")||
		(document.nForm.elements['pokename'].value=="ニャース(通常)")||(document.nForm.elements['pokename'].value=="ニャース(ガラル)")||
		(document.nForm.elements['pokename'].value=="バリヤード")||
		(document.nForm.elements['pokename'].value=="バリヤード(通常)")||(document.nForm.elements['pokename'].value=="バリヤード(ガラル)")||
		(document.nForm.elements['pokename'].value=="デスマス")||
		(document.nForm.elements['pokename'].value=="デスマス(通常)")||(document.nForm.elements['pokename'].value=="デスマス(ガラル)")){
		document.nForm.elements['mega0'].value="通常";
		document.nForm.elements['mega1'].value="ガラル";
		visi(2);
	}else{
		visi(0);
	}
}
function visi(num){
	if(num == 0){
		document.nForm.elements['mega0'].style.visibility="hidden";
		document.nForm.elements['mega1'].style.visibility="hidden";
		document.nForm.elements['mega2'].style.visibility="hidden";
		document.nForm.elements['mega3'].style.visibility="hidden";
		document.nForm.elements['mega0'].style.width = 70;
		document.nForm.elements['mega1'].style.width = 70;
	}else if(num == 2){
		document.nForm.elements['mega0'].style.visibility="visible";
		document.nForm.elements['mega1'].style.visibility="visible";
		document.nForm.elements['mega2'].style.visibility="hidden";
		document.nForm.elements['mega3'].style.visibility="hidden";
		document.nForm.elements['mega0'].style.width = 70;
		document.nForm.elements['mega1'].style.width = 70;
		document.nForm.elements['mega2'].style.width = 70;
	}else if(num == 4){
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
	if((document.nForm.elements['pokename'].value=="ギルガルド")||
		(document.nForm.elements['pokename'].value=="ギルガルド(ブレード)")||
		(document.nForm.elements['pokename'].value=="ギルガルド(シールド)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ギルガルド(ブレード)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ギルガルド(シールド)";
 		}
 	}else if((document.nForm.elements['pokename'].value=="ヒヒダルマ")||
		(document.nForm.elements['pokename'].value=="ヒヒダルマ(通常)")||
		(document.nForm.elements['pokename'].value=="ヒヒダルマ(ダルマ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ヒヒダルマ(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ヒヒダルマ(ダルマ)";
 		}
 	}else if((document.nForm.elements['pokename'].value=="コオリッポ")||
		(document.nForm.elements['pokename'].value=="コオリッポ(アイス)")||
		(document.nForm.elements['pokename'].value=="コオリッポ(ナイス)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="コオリッポ(アイス)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="コオリッポ(ナイス)";
 		}
 	 	}else if((document.nForm.elements['pokename'].value=="イエッサン")||
		(document.nForm.elements['pokename'].value=="イエッサン♂")||
		(document.nForm.elements['pokename'].value=="イエッサン♀")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="イエッサン♂";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="イエッサン♀";
 		}
 	}else if((document.nForm.elements['pokename'].value=="ヨワシ")||
		(document.nForm.elements['pokename'].value=="ヨワシ(単独)")||
		(document.nForm.elements['pokename'].value=="ヨワシ(群れ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ヨワシ(単独)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ヨワシ(群れ)";
 		}
 	}else if((document.nForm.elements['pokename'].value=="バケッチャ")||
		(document.nForm.elements['pokename'].value=="バケッチャ(特大)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(大きい)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(普通)")||
		(document.nForm.elements['pokename'].value=="バケッチャ(小さい)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="バケッチャ(特大)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="バケッチャ(大きい)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="バケッチャ(普通)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="バケッチャ(小さい)";
 		}
 	}else if((document.nForm.elements['pokename'].value=="パンプジン")||
		(document.nForm.elements['pokename'].value=="パンプジン(特大)")||
		(document.nForm.elements['pokename'].value=="パンプジン(大きい)")||
		(document.nForm.elements['pokename'].value=="パンプジン(普通)")||
		(document.nForm.elements['pokename'].value=="パンプジン(小さい)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="パンプジン(特大)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="パンプジン(大きい)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="パンプジン(普通)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="パンプジン(小さい)";
 		}
	}else if((document.nForm.elements['pokename'].value=="ロトム")||
		(document.nForm.elements['pokename'].value=="ロトム(ノーマル)")||
		(document.nForm.elements['pokename'].value=="ロトム(FC)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ロトム(ノーマル)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ロトム(FC)";
 		}
 	}else if((document.nForm.elements['pokename'].value=="ニャース")||
		(document.nForm.elements['pokename'].value=="ニャース(通常)")||(document.nForm.elements['pokename'].value=="ニャース(ガラル)")||
		(document.nForm.elements['pokename'].value=="バリヤード")||
		(document.nForm.elements['pokename'].value=="バリヤード(通常)")||(document.nForm.elements['pokename'].value=="バリヤード(ガラル)")||
		(document.nForm.elements['pokename'].value=="デスマス")||
		(document.nForm.elements['pokename'].value=="デスマス(通常)")||(document.nForm.elements['pokename'].value=="デスマス(ガラル)")){
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