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

var myImage1 = document.getElementById("mainImage1");
	var imageArray1 = [ "images/teamproject1.png",
			"images/teamproject2.png","images/teamproject3.png" ];
	var imageIndex1 = 0;

	function changeImage1() {
		myImage1.setAttribute("src", imageArray1[imageIndex1]);
		imageIndex1++;
		if (imageIndex1 >= imageArray1.length) {
			imageIndex1 = 0;
		}
	}
	setInterval(changeImage1, 3000);


