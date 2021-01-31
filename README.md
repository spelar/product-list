# product-list

## 사용 기술

1. [HTML](#html)
1. [CSS](#css)
1. [JS](#js)
1. [Webpack](#webpack)
	
## HTML

  <a name="html--text"></a><a name="1.1"></a>
  - [1.1](#html--text) **대체 텍스트**: 아이콘, 이미지 대체 텍스트 사용

	```html

	<button type="button" class="product-header__btn">
	 <span class="blind">리스트 UI 바꾸기</span>
	</button>

	```

	```html

	<img src="http://image.msscdn.net/images/goods_img/20180921/865862/865862_2_320.jpg" alt="캐시미어 블렌드 대디 숄더 싱글 롱 코트" />

	```

	<a name="html--heading"></a><a name="1.2"></a>
  - [1.2](#html--heading) **제목 텍스트**: 문서의 구조를 위해 제목 텍스트 사용

	```html

	<h1 class="blind">검색결과</h1>

	```

	```html

	<h2 class="ellipsis product-item__info--title">
		[유아인 착장상품] 무신사랑 이벤트 진행중 - 캐시미어 블렌드 대디 숄더 싱글 롱 코트
	</h2>

	```

	<a name="html--confirm"></a><a name="1.3"></a>
  - [1.3](#html--confirm) **검증**: tool을 이용한 검증

	<img width="383" src="https://user-images.githubusercontent.com/17353901/106379278-1f188900-63ee-11eb-96aa-cbbb275c3c77.jpg">

	<img width="346" src="https://user-images.githubusercontent.com/17353901/106379329-846c7a00-63ee-11eb-8b19-458f35dae5c8.jpg">

## CSS

  <a name="css--bem"></a><a name="2.1"></a>
  - [2.1](#css--bem) **CSS 방법론**: CSS 개발 방법론 BEM 사용

	```html

	<div class="product-header">
		<div class="product-header__title-wrap">
			<span class="product-header__title"></span>
			<span class="product-header__time"></span>
		</div>
		<button type="button" class="product-header__btn"></button>
	</div>

	```

	<a name="css--sass"></a><a name="2.2"></a>
  - [2.2](#css--sass) **CSS Sass**: css preprocessor Sass 사용

	```css

	.product-item {
		float: inherit;
		width: $grid-1;
		height: 204px;
		&__image {
			position: absolute;
			display: flex;
			padding-top: inherit;
			max-width: 170px;
			height: 204px;
			img {
				position: initial;
			}
			&--badge {
				bottom: 0px;
				margin: 0px;
			}
		}
	}

	```

## JS

  <a name="js--vanillaJs"></a><a name="3.1"></a>
  - [3.1](#js--vanillaJs) **vanilla Js**: pure javascript 사용

	```javascript

	productHeaderBtn[0].addEventListener('click', setViewType);

	```
		
<a name="js--es6"></a><a name="3.2"></a>
- [3.2](#js--es6) **es6**: es6 Template literal 사용

	```javascript
	
	productList[0].classList.add(`${viewType[viewTypeIndex]}`);
	
 	 ```

## Webpack

  <a name="webpack--webpack"></a><a name="4.1"></a>
  - [4.1](#webpack--webpack) **Webpack**: module bundler Webpack 사용

	<img width="662" src="https://user-images.githubusercontent.com/17353901/106379709-373dd780-63f1-11eb-8091-81825aae9112.png">

## 실행

* 패키지 모듈 설치
```bash
$ yarn install
``` 

*  Webpack dev 서버 실행
	* Webpack dev 서버를 실행하려면 루트 디렉토리에서 다음 명령을 실행하세요.   
```bash
$ yarn run start
``` 

* Webpack build 실행
	* Webpack build 실행하려면 루트 디렉토리에서 다음 명령을 실행하세요.
```bash
$ yarn run build
``` 
                        
