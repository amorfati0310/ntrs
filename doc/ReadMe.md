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