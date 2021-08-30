var myImage = document.getElementById("mainImage");
	var imageArray = [ "images/dbaproject1.png",
			"images/dbaproject2.png","images/dbaproject3.png" ];
	var imageIndex = 0;

	function changeImage() {
		myImage.setAttribute("src", imageArray[imageIndex]);
		imageIndex++;
		if (imageIndex >= imageArray.length) {
			imageIndex = 0;
		}
	}
	setInterval(changeImage, 3000);
