## 🧡 Cripto Tracker App TIL🧐

- 사용 기술
- 프로젝트 만들기
- 기능

---

### 프로젝트 시작

처음으로 배운 리액트와 타입 스크립트 문법을 활용해, 코인 거래 시가총액을 그래프로 표현한 작은 앱 입니다.

### 사용 기술

#### FrontEnd

<p>
<img src="./read_src/tech_icon/React.png" width="75" height="75"/>
<img src="./read_src/tech_icon/typescript_ps.png" width="75" height="75"/>
</p>

### 기능

<details>
<summary>Chart / Price</summary>

#### fetch coins & draw it on Chart / Price

</details>

<details>
<summary>Dark mode & Light mode</summary>

#### Switch modes using atom, recoils

recoil atom을 이용해 만든 theme button

#### 구현 중 마주한 문제 ?

리액트 스타일 컴포넌트에 themeProvider만을 이용해 모드를 바꾸던 중, 다크모드인지, 아닌지에 대한 정보를 가지고 있는 prop을 부모요소에서 자식 요소로 물려줘야만 한다는 것에 불편함을 느꼈습니다.

#### 이를 해결한 방법 ?

react-recoil의 atom(bubble) 기능을 이용해 themeProvider 안에 있는 모든 컴포넌트에서 직접 액세스할 수 있도록 수정하였습니다.

#### 적용 사진

</details>
