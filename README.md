# ndive-design-system

[![CI](https://github.com/yujeongJeon/ndive-design-system/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/yujeongJeon/ndive-design-system/actions/workflows/ci.yaml)
![NPM Version](https://img.shields.io/npm/v/%40ndive%2Fdesign-tokens)
![NPM Version](https://img.shields.io/npm/v/%40ndive%2Fdesign-components)
![NPM Version](https://img.shields.io/npm/v/%40ndive%2Fdesign-tracker)

- This project is a design system example created for practical exercises in Chapter 8 of the Npm Deep Dive book. The system is based on React and includes various UI components and style guides, designed to maintain consistency across multiple projects. Additionally, it features an API client for extracting design tokens from Figma and a tracker to analyze the usage of the design system.
- 이 프로젝트는 npm deep dive 도서의 8장에서 실습용으로 작성된 디자인 시스템 예제입니다. 이 시스템은 React를 기반으로 하며, 다양한 UI 컴포넌트와 스타일 가이드를 포함하여 프로젝트 간의 일관성을 유지하기 위해 설계되었습니다. 또한 Figma에서 디자인 토큰을 추출하는 API 클라이언트와 디자인 시스템의 사용량을 분석하는 Tracker도 포함되어 있습니다.

## packages

- `@ndive/design-components` : 디자인 시스템 전용 컴포넌트와 스타일을 관리합니다.
- `@ndive/design-tokens` : Figma로부터 디자인 토큰을 추출하고 업데이트합니다.
- `@ndive/design-tracker` : `@ndive/design-components`의 사용량을 정적 분석합니다. 이 패키지는 [react-scanner](https://www.npmjs.com/package/react-scanner)를 기반으로 구현되었습니다.

## shared

다음 패키지들은 외부에 배포되지 않으며, ndive-design-system 프로젝트 내부에서만 사용됩니다.

- `@ndive/tsconfig` : 타입스크립트 구성 파일
- `@ndive/vite` : Vite 번들러 설정 파일

## apps

ndive-design-system의 애플리케이션을 관리합니다.

- `@ndive/design-storybook` : `@ndive/design-components`의 UI 컴포넌트를 보여주는 스토리북입니다.

## examples

ndive-design-system의 패키지를 활용한 예제 프로젝트입니다.

- `shopping-web`: 장바구니 애플리케이션 예제 프로젝트
