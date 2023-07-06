// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let hantei1 = document.querySelector('button#print');
hantei1.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let i = document.querySelector('input[name="yoso"]');
  let yoso = i.value;
  Number('yoso');
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  kaisu = kaisu + 1;

  let syouri = 0;

  // 課題3-1: 正解判定する;
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let t = document.querySelector('p#result');
  if (kaisu < 5 && syouri !== 1) {
    let su = document.querySelector('span#kaisu');
    su.textContent = kaisu + "回目の予想:";
    let n = document.querySelector('span#answer');
    n.textContent = yoso;
    if (yoso == kotae) {
      t.textContent = "正解です.おめでとう!";
      syouri = 1;
    } else if (yoso < kotae) {
      t.textContent = "まちがい.答えはもっと大きいですよ.";
    } else {
      t.textContent = "まちがい.答えはもっと小さいですよ.";
    }
  } else {
    t.textContent = "答えは" + kotae + "でした.既にゲームは終わっています.";
  }
}

/*function hantei() {
   将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="yoso"]');
  let yoso = IntegerparseInt(i.value);
  kaisu = kaisu + 1;
  console.log("1回目の予想: " + yoso);
  // 課題3-1: 正解判定する
  if (yoso === kotae){
    let span = document.querySelector('span#kaisu');
    span.textContent = kaisu;
    let span1 = document.querySelector('span#answer');
    span1.textContent = yoso;
    let result = document.querySelector('p#result');
    result.textContent = "正解です．おめでとう!";
  }else if (kaisu > 4){
    let span = document.querySelector('span#kaisu');
    span.textContent = kaisu;
    let span1 = document.querySelector('span#answer');
    span1.textContent = yoso;
    let result = document.querySelector('p#result');
    result.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  }
  else if (yoso < kotae){
    let span = document.querySelector('span#kaisu');
    span.textContent = kaisu;
    let span1 = document.querySelector('span#answer');
    span1.textContent = yoso;
    let result = document.querySelector('p#result');
    result.textContent = "まちがい．答えはもっと大きいですよ";
  }else if (yoso > kotae){
    let span = document.querySelector('span#kaisu');
    span.textContent = kaisu;
    let span1 = document.querySelector('span#answer');
    span1.textContent = yoso;
    let result = document.querySelector('p#result');
    result.textContent = "まちがい．答えはもっと小さいですよ";
  }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}*/