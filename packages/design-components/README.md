# @ndive/design-components

<img alt="" src="https://img.shields.io/bundlephobia/min/%40ndive%2Fdesign-components" />

- This package is a react component package that implements a design system based on [`ndive-design-system`](https://www.figma.com/file/60fHi2F04BbdqDQWigiFjG?node-id=6-54&node-type=canvas&t=OVlVEItCjOZOhviC-0&type=design&mode=design) figma.
- [`ndive-design-system`](https://www.figma.com/file/60fHi2F04BbdqDQWigiFjG?node-id=6-54&node-type=canvas&t=OVlVEItCjOZOhviC-0&type=design&mode=design) 피그마 기반의 디자인 시스템 전용 리액트 컴포넌트 패키지

## Warning

- This package is created for learning purposes. Caution is advised when using in production. Use at your own risk.
- 이 패키지는 학습용으로 제작되었습니다. 프로덕션 환경에서 사용 시 주의가 필요합니다. 사용 시 본인의 책임 하에 사용해 주시기 바랍니다.

## how to use

To install this package first, use the following commands in your react project.

먼저 이 패키지를 설치하려면 다음 명령어를 리액트 프로젝트에서 사용하세요.

```bash
➜ npm install @ndive/design-components
```

To use components, import and use them in the following ways.

컴포넌트를 사용하려면 다음과 같은 방법으로 import 하여 사용하세요.

```tsx
import {ButtonPrimary} from '@ndive/design-components'

export default function App () {
    return (
        <ButtonPrimary 
            text="버튼" 
            size="large" 
            color="mainGreen" 
            fillType="fill" 
        />
    )
}
```

## Peer Dependencies

This package requires the following peer dependencies. It must already be installed in the project.

이 패키지는 다음과 같은 peer dependencies를 필요로 합니다. 프로젝트에 이미 설치되어 있어야 합니다.

- react@^18
- react-dom@^18
- @types/react@^18
- @types/react-dom@^18
