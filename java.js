function upDate(previewPic) {
    console.log("Đang trỏ chuột vào ảnh!");
    console.log("Đường dẫn ảnh: " + previewPic.src);
    console.log("Chú thích ảnh: " + previewPic.alt);

    let imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}