# @ndive/design-tracker

- Package for static analysis of code based on [react-scanner](https://www.npmjs.com/package/react-scanner) written in Typescript and `@babel/parser`
- 타입스크립트와 `@babel/parser`로 [react-scanner](https://www.npmjs.com/package/react-scanner) 를 바탕으로 작성된 코드 정적 분석용 패키지

## Warning

- This package is created for learning purposes. Caution is advised when using in production. Use at your own risk.
- 이 패키지는 학습용으로 제작되었습니다. 프로덕션 환경에서 사용 시 주의가 필요합니다. 사용 시 본인의 책임 하에 사용해 주시기 바랍니다.

## How to use

Installing the package is as follows:

패키지 설치는 다음과 같습니다:

```bash
➜ npm install --save-dev @ndive/design-tracker
```

Next, the package runs as follows:

실행은 다음과 같습니다:

```bash
➜ npx @ndive/design-tracker --config /path/to/config --path /path/to/folder
```

## Required Configuration

This package uses an rc file such as `ndive-design-tracker.json` to set its behavior. Add the `ndive-design-tracker.json` file to the project root directory and set it as in the example below:

이 패키지는 `ndive-design-tracker.json`과 같은 rc파일을 사용하여 동작을 설정합니다. 프로젝트 루트 디렉토리에 `ndive-design-tracker.json` 파일을 추가한 후 아래 예시와 같이 설정하세요:

```json
{
    "crawlFrom": "./src",
    "includeSubComponents": true,
    "importedFrom": "@ndive/design-components"
}
```
