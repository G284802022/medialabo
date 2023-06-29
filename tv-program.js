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