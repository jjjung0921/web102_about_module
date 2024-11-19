const path = require('path');

module.exports = {
  entry: './src/index.js', //entry point 지정
  output: {
    filename: 'bundle.js', //output file name 지정
    path: path.resolve(__dirname, 'dist'), //root폴더에 dist 폴더 생성, 해당 폴더에 bundle.js 저장
    library: { name: "MainModule", type: "umd" }, //MainModule이라는 라이브러리를 umd 형식으로 내보낸다.
    globalObject: "this", //이 객체에 라이브러리를 마운트한다.
  },
  externals: {
    react: "react", //react는 외부 의존성으로 설정 (출력 번들에서 의존성 제외)
    "react-dom": "react-dom", //react-dom 또한 외부 의존성 설정
  },
  module: { 
    rules: [ //모듈 생성 시 규칙 생성
      {
        test: /\.(js|jsx)$/, //해당 테스트를 통과하는 모든 모듈 포함
        exclude: /node_modules/, //node_modules는 제외
        use: ["babel-loader"], //사용할 로더 적용
      },
      ],
  },
  resolve: {
    extenstions: ["*", ".js", ".jsx"], //전체 파일, js, jsx 순으로 해석
  },
};