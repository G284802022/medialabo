let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう
/*let search = document.querySelector('button#print');
search.addEventListener('click', searchElement);

function searchElement() {
  let s1 = document.querySelector('select#service');
  let idx1 = s1.selectedIndex;

  let os1 = s1.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o1 = os1.item(idx1);       // os の idx 番目の要素

  console.log('  service=' + o1.getAttribute('value'));  // id 属性を表示
  console.log('  textContent='+o1.textContent);

  let s2 = document.querySelector('select#genre');
  let idx2 = s2.selectedIndex;

  let os2 = s2.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o2 = os2.item(idx2);       // os の idx 番目の要素

  console.log('  genre=' + o2.getAttribute('value'));  // id 属性を表示
  console.log('  textContent='+o2.textContent);
}



let div = document.querySelector('div#result');
let div0 = document.createElement('div');
div0.textContent = '開始時刻: ' + data.list.g1[0].start_time;
div.insertAdjacentElement('beforeend', div0);

let div1 = document.createElement('div');
div1.textContent = '終了時刻: ' + data.list.g1[0].end_time;
div.insertAdjacentElement('beforeend', div1);

let div2 = document.createElement('div');
div2.textContent = 'チャンネル: ' + data.list.g1[0].service.name;
div.insertAdjacentElement('beforeend', div2);

let div3 = document.createElement('div');
div3.textContent = 'タイトル: ' + data.list.g1[0].title;
div.insertAdjacentElement('beforeend', div3);

let div4 = document.createElement('div');
div4.textContent = '番組説明: ' + data.list.g1[0].content;
div.insertAdjacentElement('beforeend', div4);

let div5 = document.createElement('div');
div5.textContent = '開始時刻: ' + data.list.g1[1].start_time;
div.insertAdjacentElement('beforeend', div5);

let div6 = document.createElement('div');
div6.textContent = '終了時刻: ' + data.list.g1[1].end_time;
div.insertAdjacentElement('beforeend', div6);

let div7 = document.createElement('div');
div7.textContent = 'チャンネル: ' + data.list.g1[1].service.name;
div.insertAdjacentElement('beforeend', div7);

let div8 = document.createElement('div');
div8.textContent = 'タイトル: ' + data.list.g1[1].title;
div.insertAdjacentElement('beforeend', div8);

let div9 = document.createElement('div');
div9.textContent = 'サブタイトル: ' + data.list.g1[1].subtitle;
div.insertAdjacentElement('beforeend', div9);

let div10 = document.createElement('div');
div10.textContent = '出演者: ' + data.list.g1[1].act;
div.insertAdjacentElement('beforeend', div10);

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);*/


let i = 0;

//表の位置を検索
let data_posi = document.querySelector('tbody#tv_p');


//////////////////////検索について/////////////////////

//検索結果の表示位置
let search_r_posi = document.querySelector('p#search_result');


//検索ボタンによるイベント
let search_posi = document.querySelector('button#print');
search_posi.addEventListener('click', search);



let ser, genre;
//検索結果の表示
function search() {
  let k1 = document.querySelector('select#service');
  let k2 = document.querySelector('select#genre');

  //入力されたチャンネル、ジャンルを代入 → 検索時のURLで使用
  ser = k1.value;
  genre = k2.value;

  //検索時に、チャンネルまたはジャンルが未入力の場合は文を表示、通信はしない

  if(ser === "" || genre === ""){
    search_r_posi.textContent = "チャンネルとジャンルを選択してください。";
  }
  else{
    sendRequest();
 
  }

}


// 通信を開始する処理


function sendRequest(){
  let url='https://www.nishita-lab.org/web-contents/jsons/nhk/' + ser + '-' + genre + '-j.json';
  //+で文字列をつなぐ

  // 通信開始
  axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);      // 通信の最後の処理
}

//通信が成功した場合


//サーバから送られたデータを代入
let redata;

function showResult(resp) {
  //サーバから送られてきたデータを出力

  redata = resp.data;

  //dataが文字列型なら、オブジェクトに変換する
  if (typeof redata === 'string') {
    redata = JSON.parse(redata);
  }

  //結果の確認用
  console.log(redata);
  console.log(ser);
  console.log(genre);

  print_result(redata);




}


//通信エラーが発生した場合
function showError(err){
  console.log(err);
  search_r_posi.textContent = "通信エラーが発生しました。";
}

//通信の最後に実行する処理
function finish(){
  console.log('Ajax 通信が終わりました');
}



//////////////////検索結果の確認/////////////////


function print_result(){
  i = 0;

  //元の検索結果を削除
  let tr_posi = document.querySelectorAll('tbody#tv_p > tr');

  for(let b_re of tr_posi){
    b_re.remove();
  }
  
  //検索結果がなかった場合
  //なるべく波風立てない文面でね...?
  if(redata.list === null){
    search_r_posi.textContent = "該当する検索結果はありません。";
  }
  else{
    //td要素を格納するtr要素
    let newtr_data = [];
    
    //データ項目が入ったtd要素 
    let newtd_data = [];
    let j;
    i = 0;

    if(ser == "g1"){
      for(let g of redata.list.g1){
        //td要素を格納するtr要素
        newtr_data[i] = document.createElement('tr');

        //tr1つにつき7項目
        newtd_data[i] = [];
        for(j = 0; j <= 6; j++){
          newtd_data[i][j] = document.createElement('td');
      
        }

        
        //項目の要素の中身を作成
        newtd_data[i][0].textContent = g.title;
        newtd_data[i][1].textContent = g.start_time;
        newtd_data[i][2].textContent = g.end_time;  
        newtd_data[i][3].textContent = g.service.name;
        newtd_data[i][4].textContent = g.subtitle;
        newtd_data[i][5].textContent = g.content;
        newtd_data[i][6].textContent = g.act;
      
        //上のデータをtrに格納
      
      
        for(j = 0; j <= 6; j++){
          newtr_data[i].insertAdjacentElement('beforeend', newtd_data[i][j]);
      
        }
      
        //ページ上(html)に追加
        data_posi.insertAdjacentElement('beforeend', newtr_data[i]);
      
        i++;
      
      }  
    }

    
    if(ser == "e1"){
      for(let g of redata.list.e1){        
        //td要素を格納するtr要素
        newtr_data[i] = document.createElement('tr');

        //tr1つにつき7項目
        newtd_data[i] = [];
        for(j = 0; j <= 6; j++){
          newtd_data[i][j] = document.createElement('td');
      
        }

        
        //項目の要素の中身を作成
        newtd_data[i][0].textContent = g.title;
        newtd_data[i][1].textContent = g.start_time;
        newtd_data[i][2].textContent = g.end_time;  
        newtd_data[i][3].textContent = g.service.name;
        newtd_data[i][4].textContent = g.subtitle;
        newtd_data[i][5].textContent = g.content;
        newtd_data[i][6].textContent = g.act;
      
        //上のデータをtrに格納
        
        for(j = 0; j <= 6; j++){
          newtr_data[i].insertAdjacentElement('beforeend', newtd_data[i][j]);
      
        }
      
        //ページ上(html)に追加
        data_posi.insertAdjacentElement('beforeend', newtr_data[i]);
      
        i++;
      
      }

    }

    //検索件数を表示
    search_r_posi.textContent = i + "件見つかりました。";
      
  }

}