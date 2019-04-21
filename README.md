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
        - useEffect 를 사용하게 되면 안에 메서드를 만들어야 한다. async await 를 쓰기 위해서 만들게 되는데 이때에 hooks 를 새로 하나 더 만드는 개념으로 메서드를 지정하고, 그 메서드를 useEffect 안에서 써야 기능들이 다 잘 작동하는 것 같다.
          - 이부분은 조금 더 확인이 필요하긴 한데 그렇게 메서드를 나누지 않고 useEffect 에서 바로 api 를 호출하고 값을 가져오면 그 값을 사용하기가(데이터를 꺼내기가) 조금 까다롭다. 예를 들어 이런 방식으로 했을 때 result 값을 useEffect 밖에서 읽지 못했는데,
            메서드를 나누고 난 뒤에 그 메서드 만을 useEffect 에서 썼을 때는 값을 가져올 수 있었다.
          - 이 부분은 정확히 이것때문이다 라는 확인이 부족하기 때문에 조금 더 확인 필요.
    - grid layout
    - each item to detail page
  - footer
