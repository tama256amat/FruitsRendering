function fruitImgUrl(fruit) {
  fruitUrlPair = {
    banana: "https://www.kroger.com/product/images/xlarge/front/0000000004011",
    pineapple:
      "https://www.plantgrower.org/uploads/6/5/5/4/65545169/published/pineapple.jpg?1516498929",
    pear: "https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png",
  };

  const fruitLow = fruit.toLowerCase();

  if (fruitLow in fruitUrlPair) {
    return fruitUrlPair[fruitLow];
  }
  return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";
}

function renderFruit(fruit, ele) {
  const fruitDiv = document.createElement("div");
  const pDiv = document.createElement("div");
  const fruitP = document.createElement("p");
  const fruitImg = document.createElement("img");

  fruitDiv.classList.add("fruitDiv", "col");
  fruitDiv.append(pDiv);
  fruitDiv.append(fruitImg);

  fruitP.innerHTML = "Our fruit is :" + fruit;
  pDiv.append(fruitP);

  fruitImg.classList.add("fruitImg");
  fruitImg.src = fruitImgUrl(fruit);

  ele.append(fruitDiv);
}

const fruitContainer = document.getElementById("fruit-container");

// 関数の呼び出し
renderFruit("banana", fruitContainer);
renderFruit("pear", fruitContainer);
renderFruit("pineapple", fruitContainer);
renderFruit("coconut", fruitContainer);
renderFruit("grape", fruitContainer);
