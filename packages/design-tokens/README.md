# @ndive/design-tokens

![NPM Version](https://img.shields.io/npm/v/%40ndive%2Fdesign-tokens)
<img alt="" src="https://img.shields.io/bundlephobia/minzip/%40ndive%2Fdesign-tokens" />
![NPM Downloads](https://img.shields.io/npm/dw/%40ndive%2Fdesign-tokens)

- Package containing Node.js module to extract foundation from [`ndive-design-system`](https://figma.com/design/60fHi2F04BbdqDQWigiFjG/ndive-design-system) figma
- [`ndive-design-system`](https://figma.com/design/60fHi2F04BbdqDQWigiFjG/ndive-design-system) 피그마에서 파운데이션을 추출하는 Node.js 모듈을 포함하는 패키지

## Warning

- This package is created for learning purposes. Caution is advised when using in production. Use at your own risk.
- 이 패키지는 학습용으로 제작되었습니다. 프로덕션 환경에서 사용 시 주의가 필요합니다. 사용 시 본인의 책임 하에 사용해 주시기 바랍니다.

## How to use

To install this package first, use the following commands in your react project.

먼저 이 패키지를 설치하려면 다음 명령어를 리액트 프로젝트에서 사용하세요.

```bash
➜ npm install @ndive/design-tokens
```

To use modules, import and use them in the following ways.

모듈울 사용하려면 다음과 같은 방법으로 import 하여 사용하세요.

```js
import {setColor} from '@ndive/design-tokens'

async function fetchColor () {
    const {group, colorSet} = await setColor({
        accessToken: process.env.FIGMA_TOKEN,
    })

    return {group, colorSet}
}
```

## Environment Variables

This package requires permission to access the `ndive-design-system` figma project. Create a `.env` file in the project root and add the following variables:

이 패키지를 사용하려면 `ndive-design-system` figma 프로젝트에 접근 가능한 권한이 필요합니다. 프로젝트 루트에 `.env` 파일을 생성하고 다음 변수를 추가하세요:

```yaml
# .env 파일

# ndive-design-system 피그마에 읽기 권한이 존재하는 사용자 토큰
FIGMA_TOKEN="YOUR-FIGMA-TOKEN" 
```
