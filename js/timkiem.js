const queryStr = window.location.search;
const urlParams = new URLSearchParams(queryStr);
document.querySelector(".search-data").innerHTML = urlParams.get("search");
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
