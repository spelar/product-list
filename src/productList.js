import './reset.css';
import './style.scss';

"use strict";

var productList = (function() {
	var viewTypeIndex = 0;
	// 3종류의 view-type을 array에 담는다.
	var viewType = ['grid-view', 'full-view', 'list-view'];
	var viewTypeLength = viewType.length;
	var productList = document.getElementsByClassName('product-list');
	var productHeaderBtn = document.getElementsByClassName('product-header__btn');

// 우측 상단 아이콘 클릭시 실행되는 함수
	var setViewType = function(e) {

		// control + 아이콘 클릭, command + 아이콘 클릭시 아이콘 이미지 다운로드
		if (e.ctrlKey || e.metaKey) {
			var style = productHeaderBtn[0].currentStyle || window.getComputedStyle(productHeaderBtn[0], false);
			var bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
			var link = document.createElement('a');
			link.href = bi;
			link.download = 'icon.jpg';
			link.target = '_blank';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} 

		viewTypeIndex++;

		// 마지막 view-type이면 처음 view-type으로 바꿔준다.
		if (viewTypeIndex === viewTypeLength) {
			viewTypeIndex = 0;
		}
		productList[0].classList.remove(productList[0].classList[1]);
		productList[0].classList.add(`${viewType[viewTypeIndex]}`);
	}
	
	// 우측 상단 아이콘 클릭시 setViewType 함수 실행
	productHeaderBtn[0].addEventListener('click', setViewType);
})();



