function buttonclick() {
  const omikuji_result = ["大吉", "吉", "中吉", "小吉", "末吉", "凶"];
  const random =
    omikuji_result[Math.floor(Math.random() * omikuji_result.length)];

  let image_name;

  switch (random) {
    case "大吉":
      document.querySelector("#result_area").innerHTML =
        "大吉！新しいことにチャレンジしよう！";
      image_name = "omikuji_daikichi.png";
      break;
    case "吉":
      document.querySelector("#result_area").innerHTML = "吉！安定の1日！";
      image_name = "omikuji_kichi.png";
      break;
    case "中吉":
      document.querySelector("#result_area").innerHTML =
        "中吉！焦らず、一歩一歩着実に！";
      image_name = "omikuji_chuukichi.png";
      break;
    case "小吉":
      document.querySelector("#result_area").innerHTML =
        "小吉！小さな幸運が訪れるよ！";
      image_name = "omikuji_syoukichi.png";
      break;
    case "末吉":
      document.querySelector("#result_area").innerHTML =
        "末吉！我慢したらいいことあるかも！";
      image_name = "omikuji_suekichi.png";
      break;
    default:
      document.querySelector("#result_area").innerHTML =
        "凶！立ち止まって自分を見つめ直す良い機会！";
      image_name = "omikuji_kyou.png";
      break;
  }
  document.getElementById("omikuji").src = "images/" + image_name;
}
