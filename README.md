# Book Curator Update!

- with hooks, mobx and typescript?

## Process

- layout (responsible)
  - header
    - router
      - router 와 header 를 다른 컴포넌트로 나눠서 router 컴포넌트에 header 를 넣는 방식으로 진행.
      - header 에는 withRouter 를 써서 props 를 이용, 선택 시 폰트 컬러.
  - body
    - show data from movie data api
      - api
        - from "themoviedb"
        - axios 의 Creating an instance 로 기본 url 설정 -> movie 와 tv 로 나누어 각각 필요한 api.get() 만들어 사용.
        - detail 은 id 필요. 검색할 때 movie 와 tv 양 쪽에서 쓸 수 있도록 movie 와 tv 에 넣는 전달하는 id 는 같다.
          -> `movie/${id}`, `tv/${id}`
        - serach 값은 query 값과 query 값의 encodeURI 필요. term 을 지정하고, params 로 query: encodeURI(term)
    - grid layout
    - each item to detail page
  - footer
