npm install prettier
Wondering why we’re not doing npm install --save or --save-dev ?

As of NPM 5, saving is done by default
--save-dev is only needed if we’re building a node app; since we output minified JS for production via npm run build, everything is a dev dependency, so it doesn’t actually matter in practice whether modules are added to dependencies or devDependencies in package.json.

오늘은 그냥 문서 좀 읽고 커밋 ...
노드앱을 통해 빌드 되기 떄문에 build를 통해서 앱이 실행되기 떄문에 실질적으로는 다 devDependencies 다

### TODO

잘 이해가 안감 질문 하기

### baseURL 지정 tsConfig

"baseUrl": "."

### 성능

https://velog.io/@dochis/%EC%9B%B9-%ED%94%84%EB%A1%A0%ED%8A%B8-%EC%86%8D%EB%8F%84-%EA%B0%9C%EC%84%A0%EC%9D%84-%EC%9C%84%ED%95%9C-%ED%95%84%EC%88%98%EB%8F%84%EA%B5%AC-%EC%86%8C%EA%B0%9C
