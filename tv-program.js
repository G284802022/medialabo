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
let position = document.querySelector('tbody#tv_p');

let result = document.querySelector('p#search_result');


let kensaku = document.querySelector('button#print');
kensaku.addEventListener('click', search);



let ser, genre;

function search() {
  let s = document.querySelector('select#service');
  let g = document.querySelector('select#genre');

  ser = s.value;
  genre = g.value;


  if(ser === "" || genre === ""){
    result.textContent = "チャンネルとジャンルを選択してください。";
  }
  else{
    sendRequest();
 
  }

}

// 通信を開始する処理

function sendRequest(){

    // URL を設定

  let url='https://www.nishita-lab.org/web-contents/jsons/nhk/' + ser + '-' + genre + '-j.json';

    // 通信開始

  axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);      // 通信の最後の処理
}

let redata;

function showResult(resp) {
  

  redata = resp.data;

  
  if (typeof redata === 'string') {
    redata = JSON.parse(redata);
  }

  console.log(redata);
  console.log(ser);
  console.log(genre);

  print_result(redata);

}


// 通信エラーが発生した時の処理
function showError(err){
  console.log(err);
  result.textContent = "通信エラーが発生しました。";
}

// 通信の最後にいつも実行する処理
function finish(){
  console.log('Ajax 通信が終わりました');
}


function print_result(){
  i = 0;
  let po = document.querySelectorAll('tbody#tv_p > tr');

  for(let l of po){
    l.remove();
  }
  
  if(redata.list === null){
    result.textContent = "該当する検索結果はありません。";
  }
  else{
    let newtr_data = [];
    let newtd_data = [];
    let j;
    i = 0;

    if(ser == "g1"){
      for(let g of redata.list.g1){
        newtr_data[i] = document.createElement('tr');
        newtd_data[i] = [];
        for(j = 0; j <= 6; j++){
          newtd_data[i][j] = document.createElement('td');
        }
        newtd_data[i][0].textContent = g.title;
        newtd_data[i][1].textContent = g.start_time;
        newtd_data[i][2].textContent = g.end_time;  
        newtd_data[i][3].textContent = g.service.name;
        newtd_data[i][4].textContent = g.subtitle;
        newtd_data[i][5].textContent = g.content;
        newtd_data[i][6].textContent = g.act;      
      
        for(j = 0; j <= 6; j++){
          newtr_data[i].insertAdjacentElement('beforeend', newtd_data[i][j]);
      
        }

        position.insertAdjacentElement('beforeend', newtr_data[i]);
        i++;
      
      }  
    }

    
    if(ser == "e1"){
      for(let g of redata.list.e1){        
        newtr_data[i] = document.createElement('tr');

        newtd_data[i] = [];
        for(j = 0; j <= 6; j++){
          newtd_data[i][j] = document.createElement('td');
        }

        newtd_data[i][0].textContent = g.title;
        newtd_data[i][1].textContent = g.start_time;
        newtd_data[i][2].textContent = g.end_time;  
        newtd_data[i][3].textContent = g.service.name;
        newtd_data[i][4].textContent = g.subtitle;
        newtd_data[i][5].textContent = g.content;
        newtd_data[i][6].textContent = g.act;
              
        for(j = 0; j <= 6; j++){
          newtr_data[i].insertAdjacentElement('beforeend', newtd_data[i][j]);      
        }
      
        position.insertAdjacentElement('beforeend', newtr_data[i]);
        i++;
      
      }

    }
    result.textContent = i + "件見つかりました。";
      
  }

}