function myfunc(){
	var image = document.getElementById('img1').src;
	if (image == "http://www.modafinilsale.com/data/out/299/231008767-music-wallpapers-hd-1080p.jpg")
	{
		document.getElementById('img1').src = "https://i.pinimg.com/736x/40/24/e8/4024e85836ce733d7819aeca9d81d51f--music-wallpaper-iphone-wallpaper.jpg";
	}
	else 
		{
		document.getElementById('img1').src = "http://www.modafinilsale.com/data/out/299/231008767-music-wallpapers-hd-1080p.jpg"	;	
	}
}