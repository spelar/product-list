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
	

## CSS

  <a name="css--bem"></a><a name="2.1"></a>
  - [2.1](#css--bem) **CSS 방법론**: 

	<a name="css--sass"></a><a name="2.2"></a>
  - [2.2](#css--sass) **CSS Sass**: 

## JS

  <a name="js--vanillaJs"></a><a name="3.1"></a>
  - [3.1](#js--vanillaJs) **vanilla Js**: 

	<a name="js--es6"></a><a name="3.2"></a>
  - [3.2](#js--es6) **es6**: 

## Webpack

  <a name="webpack--vanillaJs"></a><a name="4.1"></a>
  - [4.1](#webpack--vanillaJs) **Webpack**: 

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
                        
