let button = document.getElementById("cat");
button.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: replacement,
  });
});

const replacement = () => {
  const objCat = {
    0: "https://cdnn.1prime.ru/images/83410/76/834107650.jpg",
    1: "https://cdnn21.img.ria.ru/images/07e4/0c/0a/1588644193_0:321:3071:2048_1920x0_80_0_0_fee132516d8e1dc34b87ff087c071453.jpg",
    2: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Savannah_Cat_closeup.jpg/800px-Savannah_Cat_closeup.jpg",
    3: "http://govzalla.com/wp-content/uploads/2015/02/little_cute_cat_1920x1080.jpg",
    4: "https://zagge.ru/wp-content/uploads/2019/06/aHR0cDovL3d3dy5saXZlc2N.jpg",
  };

  let allImage = document.getElementsByTagName("img");

  for (let i = 0; i < allImage.length; i++) {
    allImage[i].src = objCat[Math.floor(Math.random() * 5)];
  }
};
