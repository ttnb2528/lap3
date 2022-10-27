//add su kien
const headerSearch = document.querySelector(".search-input");
const buttonSearch = document.querySelector(".icon1");
const handleSearch = (e) => {
  if (!headerSearch.value) {
    e.preventDefault();
  }
};
//shop
buttonSearch.addEventListener("click", handleSearch);
headerSearch.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    handleSearch(e);
  }
});
const listInput = document.querySelectorAll('input[type="number"]');
const listBtn = document.querySelectorAll('input[type="number"] + button');

function opencard() {
  location.href = "./donhang.html";
}
const itemList = {
  sp001: {
    name: "Sữa Chua Vị Kiwi",
    price: 21000,
    photo: "../img/Sản Phẩm/kiwi.jpg",
  },
  sp002: {
    name: "Sữa Chua Vị Xoài",
    price: 22000,
    photo: "../img/Sản Phẩm/mango.jpg",
  },
  sp003: {
    name: "Sữa Chua Vị Dưa lưới",
    price: 23000,
    photo: "../img/Sản Phẩm/cantaloupe.jpg",
  },
  sp004: {
    name: "Sữa Chua Vị Mâm Xôi",
    price: 24000,
    photo: "../img/Sản Phẩm/blackberry.jpg",
  },
  sp005: {
    name: "Sữa Chua Vị Dâu Tây",
    price: 25000,
    photo: "../img/Sản Phẩm/strawberry.jpg",
  },
  sp006: {
    name: "Sữa Chua Vị Việt Quất",
    price: 26000,
    photo: "../img/Sản Phẩm/blueberry.jpg",
  },
  sp007: {
    name: "Sữa Chua Vị Bưởi",
    price: 27000,
    photo: "../img/Sản Phẩm/grapes.jpg",
  },
  sp008: {
    name: "Sữa Chua Vị Táo Xanh",
    price: 28000,
    photo: "../img/Sản Phẩm/green-apple.jpg",
  },
  sp009: {
    name: "Sữa Chua Vị Dứa",
    price: 29000,
    photo: "../img/Sản Phẩm/pineapple.jpg",
  },
};

//lay tat ca cac key tu cua obj luu vao mang
const listKey = Object.keys(itemList);

const setItemLocal = (i, total) => {
  if (total > 100) {
    alert("so luong dat qua 100 san pham");
    window.localStorage.setItem(listKey[i], 100);
  } else {
    alert("dat hang thanh cong");
    window.localStorage.setItem(listKey[i], total);
  }
};

const handleClick = (i) => {
  if (+listInput[i].value) {
    if (typeof window.localStorage[listKey[i]] === "undefined") {
      setItemLocal(i, +listInput[i].value);
      listInput[i].value = "0";
    } else {
      const number = +listInput[i].value;
      const current = +window.localStorage.getItem(listKey[i]);
      const total = number + current;
      listInput[i].value = "0";
      setItemLocal(i, total);
    }
  } else {
    alert("Vui long them so luong san pham");
  }
};

[...listBtn].forEach((btn, i) => {
  btn.addEventListener("click", () => handleClick(i));
});
