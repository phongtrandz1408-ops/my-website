function upDate(previewPic) {
    console.log("Sự kiện hover/focus đã được kích hoạt.");
    console.log("Image alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    let imageDiv = document.getElementById("image");
    
    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Sự kiện mouseleave/blur đã được kích hoạt.");

    let imageDiv = document.getElementById("image");
    
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("Trang web đã tải xong! Bắt đầu thiết lập TabIndex...");
    
    let images = document.querySelectorAll('.preview');
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Đã gắn tabindex thành công cho ảnh số " + (i + 1));
    }
}
