# @ndive/design-tracker

- This CLI tool provides a static analysis of `@ndive/design-components` usage in your codebase. Leveraging [ts-morph](https://ts-morph.com/), it systematically examines how specific components or features are utilized within TypeScript code and generates a comprehensive report.
- `@ndive/design-components`의 사용량을 분석하는 CLI 도구. [ts-morph](https://ts-morph.com/)를 활용해 타입스크립트 코드에서 컴포넌트 사용 패턴을 정적 분석하고, 명확하고 체계적인 리포트를 생성합니다.

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
➜ npx @ndive/design-tracker --config /path/to/config --tsconfig /path/to/tsconfig.json
```

## Required Configuration

This package uses an rc file such as `ndive-design-tracker.json` to set its behavior. Add the `ndive-design-tracker.json` file to the project root directory and set it as in the example below:

이 패키지는 `ndive-design-tracker.json`과 같은 rc파일을 사용하여 동작을 설정합니다. 프로젝트 루트 디렉토리에 `ndive-design-tracker.json` 파일을 추가한 후 아래 예시와 같이 설정하세요:

```jsonc
{
    "tsConfigFilePath": "./tsconfig.json",
    "outputTo": "./data.json", // default "stdout",
    "globs": ["**/!(*.test|*.spec|*.d).@(js|ts)?(x)"] // default ["**/!(*.test|*.spec|*.d).@(js|ts)?(x)"]
}
```
