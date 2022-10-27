const headerSearch = document.querySelector(".search-input");
const buttonSearch = document.querySelector(".icon1");
const handleSearch = (e) => {
  if (!headerSearch.value) {
    e.preventDefault();
  }
};
buttonSearch.addEventListener("click", handleSearch);
headerSearch.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    handleSearch(e);
  }
});

function opencard() {
  location.href = "./donhang.html";
}

const container = document.querySelector(".container");
const listInput = document.querySelectorAll(".container-input");

const handleContainer = (value, type) => {
  const isContainer = (item, min) => new RegExp(`.{${min},}`).test(item);

  switch (type) {
    case "password":
      return isContainer(value, 8);
    case "email":
      const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (value && emailReg.test(value)) {
        return true;
      }
      return false;
    case "text":
      return isContainer(value, 4);
    case "textarea":
      return isContainer(value, 10);
    default:
      throw new Error(value, type);
  }
};
const handleSubmit = (e) => {
  e.preventDefault();
  const len = listInput.length;
  let iscontainer = true;

  for (let i = 0; i < len; i++) {
    if (!handleContainer(listInput[i].value, listInput[i].type)) {
      alert(`${listInput[i].type} không hợp lệ!`);
      listInput[i].focus();
      iscontainer = false;
      break;
    }
  }
  if (iscontainer) {
    container.submit();
  }
};
container.addEventListener("submit", handleSubmit);
