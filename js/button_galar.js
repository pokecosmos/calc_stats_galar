//メガシンカボタンの変更
function mega_button(){
	var p = document.nForm.elements['pokename'].value;
	if((p=="コラッタ")||(p=="コラッタ(通常)")||(p=="コラッタ(アローラ)")||
		(p=="ラッタ")||(p=="ラッタ(通常)")||(p=="ラッタ(アローラ)")||
		(p=="ライチュウ")||(p=="ライチュウ(通常)")||(p=="ライチュウ(アローラ)")||
		(p=="サンド")||(p=="サンド(通常)")||(p=="サンド(アローラ)")||
		(p=="サンドパン")||(p=="サンドパン(通常)")||(p=="サンドパン(アローラ)")||
		(p=="ロコン")||(p=="ロコン(通常)")||(p=="ロコン(アローラ)")||
		(p=="キュウコン")||(p=="キュウコン(通常)")||(p=="キュウコン(アローラ)")||
		(p=="ディグダ")||(p=="ディグダ(通常)")||(p=="ディグダ(アローラ)")||
		(p=="ダグトリオ")||(p=="ダグトリオ(通常)")||(p=="ダグトリオ(アローラ)")||
		(p=="ペルシアン")||(p=="ペルシアン(通常)")||(p=="ペルシアン(アローラ)")||
		(p=="イシツブテ")||(p=="イシツブテ(通常)")||(p=="イシツブテ(アローラ)")||
		(p=="ゴローン")||(p=="ゴローン(通常)")||(p=="ゴローン(アローラ)")||
		(p=="ゴローニャ")||(p=="ゴローニャ(通常)")||(p=="ゴローニャ(アローラ)")||
		(p=="ベトベター")||(p=="ベトベター(通常)")||(p=="ベトベター(アローラ)")||
		(p=="ベトベトン")||(p=="ベトベトン(通常)")||(p=="ベトベトン(アローラ)")||
		(p=="ナッシー")||(p=="ナッシー(通常)")||(p=="ナッシー(アローラ)")||
		(p=="ガラガラ")||(p=="ガラガラ(通常)")||(p=="ガラガラ(アローラ)")){
		visi(2, "通常", "アローラ");
	}else if((p=="ポニータ")||(p=="ポニータ(通常)")||(p=="ポニータ(ガラル)")||
		(p=="ギャロップ")||(p=="ギャロップ(通常)")||(p=="ギャロップ(ガラル)")||
		(p=="ヤドン")||(p=="ヤドン(通常)")||(p=="ヤドン(ガラル)")||
		(p=="ヤドラン")||(p=="ヤドラン(通常)")||(p=="ヤドラン(ガラル)")||
		(p=="ヤドキング")||(p=="ヤドキング(通常)")||(p=="ヤドキング(ガラル)")||
		(p=="カモネギ")||(p=="カモネギ(通常)")||(p=="カモネギ(ガラル)")||
		(p=="マタドガス")||(p=="マタドガス(通常)")||(p=="マタドガス(ガラル)")||
		(p=="バリヤード")||(p=="バリヤード(通常)")||(p=="バリヤード(ガラル)")||
		(p=="サニーゴ")||(p=="サニーゴ(通常)")||(p=="サニーゴ(ガラル)")||
		(p=="ジグザグマ")||(p=="ジグザグマ(通常)")||(p=="ジグザグマ(ガラル)")||
		(p=="マッスグマ")||(p=="マッスグマ(通常)")||(p=="マッスグマ(ガラル)")||
		(p=="ダルマッカ")||(p=="ダルマッカ(通常)")||(p=="ダルマッカ(ガラル)")||
		(p=="サンダー")||(p=="サンダー(通常)")||(p=="サンダー(ガラル)")||
		(p=="ファイヤー")||(p=="ファイヤー(通常)")||(p=="ファイヤー(ガラル)")||
		(p=="フリーザー")||(p=="フリーザー(通常)")||(p=="フリーザー(ガラル)")||
		(p=="デスマス")||(p=="デスマス(通常)")||(p=="デスマス(ガラル)")||
		(p=="マッギョ")||(p=="マッギョ(通常)")||(p=="マッギョ(ガラル)")){
		visi(2, "通常", "ガラル");
	}else if((p=="ニャース")||(p=="ニャース(通常)")||(p=="ニャース(アローラ)")||(p=="ニャース(ガラル)")){
		visi(3, "通常", "アローラ", "ガラル");
	}else if((p=="ポワルン")||(p=="ポワルン(基本)")||(p=="ポワルン(たいよう)")||(p=="ポワルン(あまぐも)")||(p=="ポワルン(ゆきぐも)")){
		visi(4, "基本", "たいよう", "あまぐも", "ゆきぐも");
	}else if((p=="グラードン")||(p=="ゲンシグラードン")||(p=="カイオーガ")||(p=="ゲンシカイオーガ")){
		visi(2, "通常", "ゲンシ");
	}else if((p=="デオキシス")||(p=="デオキシス(基本)")||(p=="デオキシス(アタック)")||(p=="デオキシス(ディフェンス)")||(p=="デオキシス(スピード)")){
		visi(4, "基本", "ＡＴ", "ＤＦ", "ＳＰ");
	}else if((p=="ミノマダム")||(p=="ミノマダム(草木)")||(p=="ミノマダム(砂地)")||(p=="ミノマダム(ゴミ)")){
		visi(3, "草木", "砂地", "ゴミ");
	}else if((p=="ロトム")||(p=="ロトム(基本)")||(p=="ロトム(FC)")){
		visi(2, "通常", "ＦＣ");
	}else if((p=="ギラティナ")||(p=="ギラティナ(アナザー)")||(p=="ギラティナ(オリジン)")){
		visi(2, "アナザー", "オリジン");
	}else if((p=="シェイミ")||(p=="シェイミ(ランド)")||(p=="シェイミ(スカイ)")){
		visi(2, "ランド", "スカイ");
	}else if((p=="ヒヒダルマ")||(p=="ヒヒダルマ(通常)")||(p=="ヒヒダルマ(ダルマ)")||(p=="ヒヒダルマ(ガラル)")||(p=="ヒヒダルマ(雪ダルマ)")){
		visi(4, "通常", "ダルマ", "ガラル", "雪ダルマ");
	}else if((p=="チェリム")||(p=="チェリム(ポジ)")||(p=="チェリム(ネガ)")){
		visi(2, "ポジ", "ネガ");
	}else if((p=="シキジカ")||(p=="シキジカ(春)")||(p=="シキジカ(夏)")||(p=="シキジカ(秋)")||(p=="シキジカ(冬)")){
		visi(4, "春", "夏", "秋", "冬");
	}else if((p=="メブキジカ")||(p=="メブキジカ(春)")||(p=="メブキジカ(夏)")||(p=="メブキジカ(秋)")||(p=="メブキジカ(冬)")){
		visi(4, "春", "夏", "秋", "冬");
	}else if((p=="デオキシス")||(p=="デオキシス(基本)")||(p=="デオキシス(アタック)")||(p=="デオキシス(ディフェンス)")||(p=="デオキシス(スピード)")){
		visi(4, "基本", "ＡＴ", "ＤＦ", "ＳＰ");
	}else if((p=="トルネロス")||(p=="トルネロス(化身)")||(p=="トルネロス(霊獣)")||
		(p=="ボルトロス")||(p=="ボルトロス(化身)")||(p=="ボルトロス(霊獣)")||
		(p=="ランドロス")||(p=="ランドロス(化身)")||(p=="ランドロス(霊獣)")){
		visi(2, "化身", "霊獣");
	}else if((p=="キュレム")||(p=="キュレム(通常)")||(p=="ブラックキュレム")||(p=="ホワイトキュレム")){
		visi(3, "通常", "ブラック", "ホワイト");
	}else if((p=="ケルディオ")||(p=="ケルディオ(いつも)")||(p=="ケルディオ(かくご)")){
		visi(2, "いつも", "かくご");
	}else if((p=="メロエッタ")||(p=="メロエッタ(ボイス)")||(p=="メロエッタ(ステップ)")){
		visi(2, "ボイス", "ステップ");
	}else if((p=="ゲッコウガ")||(p=="サトシゲッコウガ")){
		visi(2, "通常", "サトシ");
	}else if((p=="ニャオニクス")||(p=="ニャオニクス♂")||(p=="ニャオニクス♀")){
		visi(2, "♂", "♀");
	}else if((p=="ギルガルド")||(p=="ギルガルド(ブレード)")||(p=="ギルガルド(シールド)")){
		visi(2, "ブレード", "シールド");
	}else if((p=="バケッチャ")||(p=="バケッチャ(特大)")||(p=="バケッチャ(大きい)")||(p=="バケッチャ(普通)")||(p=="バケッチャ(小さい)")||
		(p=="パンプジン")||(p=="パンプジン(特大)")||(p=="パンプジン(大きい)")||(p=="パンプジン(普通)")||(p=="パンプジン(小さい)")){
		visi(4, "特大", "大きい", "普通", "小さい");
	}else if((p=="ジガルデ")||(p=="ジガルデ(10%)")||(p=="ジガルデ(50%)")||(p=="ジガルデ(パーフェクト)")){
		visi(3, "10％", "50％", "100％");
	}else if((p=="フーパ")||(p=="フーパ(戒め)")||(p=="フーパ(解放)")){
		visi(2, "戒め", "解放");
	}else if((p=="オドリドリ")||(p=="オドリドリ(ぱちぱち)")||(p=="オドリドリ(ふらふら)")||(p=="オドリドリ(めらめら)")||(p=="オドリドリ(まいまい)")){
		visi(4, "ぱちぱち", "ふらふら", "めらめら", "まいまい");
	}else if((p=="ルガルガン")||(p=="ルガルガン(真昼)")||(p=="ルガルガン(真夜中)")||(p=="ルガルガン(黄昏)")){
		visi(3, "真昼", "真夜中", "黄昏");
	}else if((p=="ヨワシ")||(p=="ヨワシ(単独)")||(p=="ヨワシ(群れ)")){
		visi(2, "単独", "群れ");
	}else if((p=="メテノ")||(p=="メテノ(コア)")||(p=="メテノ(流星)")){
		visi(2, "流星", "コア");
	}else if((p=="ネクロズマ")||(p=="ネクロズマ(通常)")||(p=="ネクロズマ(日食)")||(p=="ネクロズマ(月食)")||(p=="ウルトラネクロズマ")){
		visi(4, "通常", "日食", "月食", "ウルトラ");
	}else if((p=="コオリッポ")||(p=="コオリッポ(アイス)")||(p=="コオリッポ(ナイス)")){
		visi(2, "アイス", "ナイス");
	}else if((p=="イエッサン")||(p=="イエッサン♂")||(p=="イエッサン♀")){
		visi(2, "♂", "♀");
	}else if((p=="ストリンダー")||(p=="ストリンダー(ハイ)")||(p=="ストリンダー(ロー)")){
		visi(2, "ハイ", "ロー");
	}else if((p=="ザシアン")||(p=="ザシアン(通常)")||(p=="ザシアン(剣の王)")){
		visi(2, "通常", "剣の王");
	}else if((p=="ザマゼンタ")||(p=="ザマゼンタ(通常)")||(p=="ザマゼンタ(盾の王)")){
		visi(2, "通常", "盾の王");
	}else if((p=="ウーラオス")||(p=="ウーラオス(いちげき)")||(p=="ウーラオス(れんげき)")){
		visi(2, "いちげき", "れんげき");
	}else if((p=="カラナクシ")||(p=="カラナクシ(西の海)")||(p=="カラナクシ(東の海)")){
		visi(2, "西の海", "東の海");
	}else if((p=="トリトドン")||(p=="トリトドン(西の海)")||(p=="トリトドン(東の海)")){
		visi(2, "西の海", "東の海");
	}else if((p=="バドレックス")||(p=="バドレックス(通常)")||(p=="バドレックス(白馬上)")||(p=="バドレックス(黒馬上)")){
		visi(3, "通常", "白馬上", "黒馬上");
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
	}else if(num == 2){
		document.nForm.elements['mega0'].value = var1;
		document.nForm.elements['mega1'].value = var2;
		document.nForm.elements['mega0'].style.visibility="visible";
		document.nForm.elements['mega1'].style.visibility="visible";
		document.nForm.elements['mega2'].style.visibility="hidden";
		document.nForm.elements['mega3'].style.visibility="hidden";
	}else if(num == 3){
		document.nForm.elements['mega0'].value = var1;
		document.nForm.elements['mega1'].value = var2;
		document.nForm.elements['mega2'].value = var3;
		document.nForm.elements['mega0'].style.visibility="visible";
		document.nForm.elements['mega1'].style.visibility="visible";
		document.nForm.elements['mega2'].style.visibility="visible";
		document.nForm.elements['mega3'].style.visibility="hidden";
	}else if(num == 4){
		document.nForm.elements['mega0'].value = var1;
		document.nForm.elements['mega1'].value = var2;
		document.nForm.elements['mega2'].value = var3;
		document.nForm.elements['mega3'].value = var4;
		document.nForm.elements['mega0'].style.visibility="visible";
		document.nForm.elements['mega1'].style.visibility="visible";
		document.nForm.elements['mega2'].style.visibility="visible";
		document.nForm.elements['mega3'].style.visibility="visible";
	}
}

//メガシンカボタン
function megachange(num){
	var p = document.nForm.elements['pokename'].value;
		if((p=="コラッタ")||(p=="コラッタ(通常)")||(p=="コラッタ(アローラ)")||
		(p=="ラッタ")||(p=="ラッタ(通常)")||(p=="ラッタ(アローラ)")||
		(p=="ライチュウ")||(p=="ライチュウ(通常)")||(p=="ライチュウ(アローラ)")||
		(p=="サンド")||(p=="サンド(通常)")||(p=="サンド(アローラ)")||
		(p=="サンドパン")||(p=="サンドパン(通常)")||(p=="サンドパン(アローラ)")||
		(p=="ロコン")||(p=="ロコン(通常)")||(p=="ロコン(アローラ)")||
		(p=="キュウコン")||(p=="キュウコン(通常)")||(p=="キュウコン(アローラ)")||
		(p=="ディグダ")||(p=="ディグダ(通常)")||(p=="ディグダ(アローラ)")||
		(p=="ダグトリオ")||(p=="ダグトリオ(通常)")||(p=="ダグトリオ(アローラ)")||
		(p=="ペルシアン")||(p=="ペルシアン(通常)")||(p=="ペルシアン(アローラ)")||
		(p=="イシツブテ")||(p=="イシツブテ(通常)")||(p=="イシツブテ(アローラ)")||
		(p=="ゴローン")||(p=="ゴローン(通常)")||(p=="ゴローン(アローラ)")||
		(p=="ゴローニャ")||(p=="ゴローニャ(通常)")||(p=="ゴローニャ(アローラ)")||
		(p=="ベトベター")||(p=="ベトベター(通常)")||(p=="ベトベター(アローラ)")||
		(p=="ベトベトン")||(p=="ベトベトン(通常)")||(p=="ベトベトン(アローラ)")||
		(p=="ナッシー")||(p=="ナッシー(通常)")||(p=="ナッシー(アローラ)")||
		(p=="ガラガラ")||(p=="ガラガラ(通常)")||(p=="ガラガラ(アローラ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(アローラ\)/g,"");
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(通常\)/g,"");
 			document.nForm.elements['pokename'].value= "" + document.nForm.elements['pokename'].value + "(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(アローラ\)/g,"");
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(通常\)/g,"");
 			document.nForm.elements['pokename'].value= "" + document.nForm.elements['pokename'].value + "(アローラ)";
 		}
	}else if((p=="ポニータ")||(p=="ポニータ(通常)")||(p=="ポニータ(ガラル)")||
		(p=="ギャロップ")||(p=="ギャロップ(通常)")||(p=="ギャロップ(ガラル)")||
		(p=="ヤドン")||(p=="ヤドン(通常)")||(p=="ヤドン(ガラル)")||
		(p=="ヤドラン")||(p=="ヤドラン(通常)")||(p=="ヤドラン(ガラル)")||
		(p=="ヤドキング")||(p=="ヤドキング(通常)")||(p=="ヤドキング(ガラル)")||
		(p=="カモネギ")||(p=="カモネギ(通常)")||(p=="カモネギ(ガラル)")||
		(p=="マタドガス")||(p=="マタドガス(通常)")||(p=="マタドガス(ガラル)")||
		(p=="バリヤード")||(p=="バリヤード(通常)")||(p=="バリヤード(ガラル)")||
		(p=="サニーゴ")||(p=="サニーゴ(通常)")||(p=="サニーゴ(ガラル)")||
		(p=="ジグザグマ")||(p=="ジグザグマ(通常)")||(p=="ジグザグマ(ガラル)")||
		(p=="マッスグマ")||(p=="マッスグマ(通常)")||(p=="マッスグマ(ガラル)")||
		(p=="ダルマッカ")||(p=="ダルマッカ(通常)")||(p=="ダルマッカ(ガラル)")||
		(p=="デスマス")||(p=="デスマス(通常)")||(p=="デスマス(ガラル)")||
		(p=="サンダー")||(p=="サンダー(通常)")||(p=="サンダー(ガラル)")||
		(p=="ファイヤー")||(p=="ファイヤー(通常)")||(p=="ファイヤー(ガラル)")||
		(p=="フリーザー")||(p=="フリーザー(通常)")||(p=="フリーザー(ガラル)")||
		(p=="マッギョ")||(p=="マッギョ(通常)")||(p=="マッギョ(ガラル)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(ガラル\)/g,"");
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(通常\)/g,"");
 			document.nForm.elements['pokename'].value= "" + document.nForm.elements['pokename'].value + "(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(ガラル\)/g,"");
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(通常\)/g,"");
 			document.nForm.elements['pokename'].value= "" + document.nForm.elements['pokename'].value + "(ガラル)";
 		}
	}else if((p=="ニャース")||(p=="ニャース(通常)")||(p=="ニャース(アローラ)")||(p=="ニャース(ガラル)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ニャース(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ニャース(アローラ)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="ニャース(ガラル)";
 		}
 	}else if((p=="ポワルン")||(p=="ポワルン(基本)")||(p=="ポワルン(たいよう)")||(p=="ポワルン(あまぐも)")||(p=="ポワルン(ゆきぐも)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ポワルン(基本)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ポワルン(たいよう)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="ポワルン(あまぐも)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="ポワルン(ゆきぐも)";
 		}
	}else if((p=="グラードン")||(p=="ゲンシグラードン")||(p=="カイオーガ")||(p=="ゲンシカイオーガ")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/ゲンシ/g,"");
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/ゲンシ/g,"");
 			document.nForm.elements['pokename'].value= "" + "ゲンシ" + document.nForm.elements['pokename'].value;
 		}
	}else if((p=="デオキシス")||(p=="デオキシス(基本)")||(p=="デオキシス(アタック)")||(p=="デオキシス(ディフェンス)")||(p=="デオキシス(スピード)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="デオキシス(基本)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="デオキシス(アタック)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="デオキシス(ディフェンス)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="デオキシス(スピード)";
 		}
	}else if((p=="ミノマダム")||(p=="ミノマダム(草木)")||(p=="ミノマダム(砂地)")||(p=="ミノマダム(ゴミ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ミノマダム(草木)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ミノマダム(砂地)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="ミノマダム(ゴミ)";
 		}
	}else if((p=="ロトム")||(p=="ロトム(基本)")||(p=="ロトム(FC)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ロトム(基本)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ロトム(FC)";
 		}
	}else if((p=="ギラティナ")||(p=="ギラティナ(アナザー)")||(p=="ギラティナ(オリジン)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ギラティナ(アナザー)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ギラティナ(オリジン)";
 		}
	}else if((p=="シェイミ")||(p=="シェイミ(ランド)")||(p=="シェイミ(スカイ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="シェイミ(ランド)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="シェイミ(スカイ)";
 		}
	}else if((p=="ヒヒダルマ")||(p=="ヒヒダルマ(通常)")||(p=="ヒヒダルマ(ダルマ)")||(p=="ヒヒダルマ(ガラル)")||(p=="ヒヒダルマ(雪ダルマ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ヒヒダルマ(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ヒヒダルマ(ダルマ)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="ヒヒダルマ(ガラル)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="ヒヒダルマ(雪ダルマ)";
 		}
 	}else if((p=="チェリム")||(p=="チェリム(ポジ)")||(p=="チェリム(ネガ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="チェリム(ポジ)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="チェリム(ネガ)";
 		}
 	}else if((p=="シキジカ")||(p=="シキジカ(春)")||(p=="シキジカ(夏)")||(p=="シキジカ(秋)")||(p=="シキジカ(冬)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="シキジカ(春)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="シキジカ(夏)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="シキジカ(秋)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="シキジカ(冬)";
 		}
 	}else if((p=="メブキジカ")||(p=="メブキジカ(春)")||(p=="メブキジカ(夏)")||(p=="メブキジカ(秋)")||(p=="メブキジカ(冬)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="メブキジカ(春)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="メブキジカ(夏)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="メブキジカ(秋)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="メブキジカ(冬)";
 		}
	}else if((p=="トルネロス")||(p=="トルネロス(化身)")||(p=="トルネロス(霊獣)")||
		(p=="ボルトロス")||(p=="ボルトロス(化身)")||(p=="ボルトロス(霊獣)")||
		(p=="ランドロス")||(p=="ランドロス(化身)")||(p=="ランドロス(霊獣)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(化身\)/g,"");
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(霊獣\)/g,"");
 			document.nForm.elements['pokename'].value= "" + document.nForm.elements['pokename'].value + "(化身)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(化身\)/g,"");
 			document.nForm.elements['pokename'].value = document.nForm.elements['pokename'].value.replace(/\(霊獣\)/g,"");
 			document.nForm.elements['pokename'].value= "" + document.nForm.elements['pokename'].value + "(霊獣)";
 		}
	}else if((p=="キュレム")||(p=="キュレム(通常)")||(p=="ブラックキュレム")||(p=="ホワイトキュレム")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="キュレム(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ブラックキュレム";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="ホワイトキュレム";
 		}
	}else if((p=="ケルディオ")||(p=="ケルディオ(いつも)")||(p=="ケルディオ(かくご)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ケルディオ(いつも)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ケルディオ(かくご)";
 		}
	}else if((p=="メロエッタ")||(p=="メロエッタ(ボイス)")||(p=="メロエッタ(ステップ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="メロエッタ(ボイス)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="メロエッタ(ステップ)";
 		}
	}else if((p=="ゲッコウガ")||(p=="サトシゲッコウガ")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ゲッコウガ";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="サトシゲッコウガ";
 		}
	}else if((p=="ニャオニクス")||(p=="ニャオニクス♂")||(p=="ニャオニクス♀")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ニャオニクス♂";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ニャオニクス♀";
 		}
	}else if((p=="ギルガルド")||(p=="ギルガルド(ブレード)")||(p=="ギルガルド(シールド)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ギルガルド(ブレード)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ギルガルド(シールド)";
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
	}else if((p=="ジガルデ")||(p=="ジガルデ(10%)")||(p=="ジガルデ(50%)")||(p=="ジガルデ(パーフェクト)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ジガルデ(10%)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ジガルデ(50%)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="ジガルデ(パーフェクト)";
 		}
	}else if((p=="フーパ")||(p=="フーパ(戒め)")||(p=="フーパ(解放)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="フーパ(戒め)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="フーパ(解放)";
 		}
	}else if((p=="ルガルガン")||(p=="ルガルガン(真昼)")||(p=="ルガルガン(真夜中)")||(p=="ルガルガン(黄昏)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ルガルガン(真昼)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ルガルガン(真夜中)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="ルガルガン(黄昏)";
 		}
	}else if((p=="ヨワシ")||(p=="ヨワシ(単独)")||(p=="ヨワシ(群れ)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ヨワシ(単独)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ヨワシ(群れ)";
 		}
	}else if((p=="メテノ")||(p=="メテノ(コア)")||(p=="メテノ(流星)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="メテノ(流星)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="メテノ(コア)";
 		}
 	}else if((p=="オドリドリ")||(p=="オドリドリ(ぱちぱち)")||(p=="オドリドリ(ふらふら)")||(p=="オドリドリ(めらめら)")||(p=="オドリドリ(まいまい)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="オドリドリ(ぱちぱち)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="オドリドリ(ふらふら)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="オドリドリ(めらめら)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="オドリドリ(まいまい)";
 		}
	}else if((p=="ネクロズマ")||(p=="ネクロズマ(通常)")||(p=="ネクロズマ(日食)")||(p=="ネクロズマ(月食)")||(p=="ウルトラネクロズマ")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ネクロズマ(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ネクロズマ(日食)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="ネクロズマ(月食)";
 		}else if(parseInt(num)==3){
 			document.nForm.elements['pokename'].value="ウルトラネクロズマ";
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
 	}else if((p=="ストリンダー")||(p=="ストリンダー(ハイ)")||(p=="ストリンダー(ロー)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ストリンダー(ハイ)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ストリンダー(ロー)";
 		}
	}else if((p=="ザシアン")||(p=="ザシアン(通常)")||(p=="ザシアン(剣の王)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ザシアン(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ザシアン(剣の王)";
 		}
	}else if((p=="ザマゼンタ")||(p=="ザマゼンタ(通常)")||(p=="ザマゼンタ(盾の王)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ザマゼンタ(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ザマゼンタ(盾の王)";
 		}
 	}else if((p=="ウーラオス")||(p=="ウーラオス(いちげき)")||(p=="ウーラオス(れんげき)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="ウーラオス(いちげき)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="ウーラオス(れんげき)";
 		}
 	}else if((p=="カラナクシ")||(p=="カラナクシ(西の海)")||(p=="カラナクシ(東の海)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="カラナクシ(西の海)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="カラナクシ(東の海)";
 		}
 	}else if((p=="トリトドン")||(p=="トリトドン(西の海)")||(p=="トリトドン(東の海)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="トリトドン(西の海)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="トリトドン(東の海)";
 		}
 	}else if((p=="バドレックス")||(p=="バドレックス(通常)")||(p=="バドレックス(白馬上)")||(p=="バドレックス(黒馬上)")){
		if(parseInt(num)==0){
 			document.nForm.elements['pokename'].value="バドレックス(通常)";
 		}else if(parseInt(num)==1){
 			document.nForm.elements['pokename'].value="バドレックス(白馬上)";
 		}else if(parseInt(num)==2){
 			document.nForm.elements['pokename'].value="バドレックス(黒馬上)";
 		}
	}
	setpokemon();
}