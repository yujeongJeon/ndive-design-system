import {BuildOptions, defineConfig as viteDefineConfig, LibraryOptions, PluginOption, UserConfig} from 'vite'
import dts, {type PluginOptions} from 'vite-plugin-dts'

import type {PackageJson} from 'type-fest'

/**
 * 객체 타입에서 특정 키들을 제외하는 유틸리티 타입
 * @template T - 원본 타입
 * @template U - 제외할 키들의 유니온 타입
 * @returns {Omit<T, U>} 특정 키가 제외된 타입
 */
export type DistributiveOmit<T, U extends keyof any> = T extends object ? Omit<T, U> : never // eslint-disable-line @typescript-eslint/no-explicit-any

/**
 * Rollup 옵션에서 'output' 필드를 제외한 커스텀 빌드 옵션
 */
type CustomBuildOptions = DistributiveOmit<BuildOptions['rollupOptions'], 'output'>

/**
 * PackageJson.type을 Literal Type으로 선언하면 사용처에서 불필요한 타입 단언이 필요하므로 string으로 확장
 */
type ExtendedPackageJson = Omit<PackageJson, 'type'> & {type?: string}

/**
 * Vite 설정 생성을 위한 설정 옵션 인터페이스
 * @interface ConfigOptions
 * @property {ExtendedPackageJson} pkg - package.json 파일의 내용
 * @property {Object} buildOptions - 빌드 관련 옵션
 * @property {LibraryOptions['entry']} buildOptions.entry - 라이브러리의 진입점 설정
 * @property {BuildOptions['target']} buildOptions.target - 빌드 타겟 설정 (예: es2015, es2020)
 * @property {Omit<BuildOptions['rollupOptions'], 'output'>} [rollupOptions] - Rollup 관련 추가 설정
 * @property {UserConfig['resolve']} [resolve] - 모듈 해석 관련 설정
 * @property {PluginOption[]} [plugins] - 추가할 Vite 플러그인 목록
 */
interface ConfigOptions {
    pkg: ExtendedPackageJson
    buildOptions: {
        entry: LibraryOptions['entry']
        target: BuildOptions['target']
        outDir: BuildOptions['outDir']
    }
    rollupOptions?: Omit<BuildOptions['rollupOptions'], 'output'>
    resolve?: UserConfig['resolve']
    plugins?: PluginOption[]
    dtsOptions?: PluginOptions
}

/**
 * 최종 external 설정을 생성
 * @param {CustomBuildOptions | undefined} rollupOptions - Rollup 빌드 옵션
 * @param {ExtendedPackageJson} pkg - package.json 객체
 */
const getExternalConfig = (rollupOptions: CustomBuildOptions | undefined, pkg: ExtendedPackageJson) => {
    /**
     * package.json의 의존성을 기반으로 external 설정 배열 생성
     *
     * @returns {(string | RegExp)[]} 의존성 이름과 경로 패턴 배열
     *
     * @example
     * // package.json: { "dependencies": { "react": "^17.0.0" } }
     * // 결과: ['react', /^react\/.*\/]
     */
    const getExternalDependencies = (): (string | RegExp)[] => {
        const dependencies = [...Object.keys(pkg.peerDependencies || {}), ...Object.keys(pkg.dependencies || {})]
        return dependencies.flatMap((dep) => [dep, new RegExp(`^${dep}/.*`)])
    }

    if (!rollupOptions?.external) {
        return getExternalDependencies()
    }
    if (typeof rollupOptions.external === 'function') {
        return rollupOptions.external
    }
    const explicitExternals = Array.isArray(rollupOptions.external) ? rollupOptions.external : [rollupOptions.external]
    return [...explicitExternals, ...getExternalDependencies()]
}

// .ts .jsx .tsx .scss
export const replaceESMExtension = (target: string) => {
    const regex = /\.([tj]s[x]?|scss)$/
    return target.replace(regex, '.mjs')
}

/**
 * Vite 라이브러리 빌드 설정을 생성하는 메인 함수
 * @param {ConfigOptions} options - 설정 옵션
 * @param {ExtendedPackageJson} options.pkg - package.json 객체
 * @param {Object} options.buildOptions - 빌드 옵션
 * @param {LibraryOptions['entry']} options.buildOptions.entry - 진입점 설정
 * @param {BuildOptions['target']} options.buildOptions.target - 빌드 타겟
 * @param {Omit<BuildOptions['rollupOptions'], 'output'>} [options.rollupOptions] - Rollup 옵션
 * @param {UserConfig['resolve']} [options.resolve] - 모듈 해석 설정
 * @param {PluginOption[]} [options.plugins] - 추가 플러그인
 */
const defineConfig = ({
    pkg,
    buildOptions: {entry, target, outDir},
    rollupOptions,
    resolve,
    plugins,
    dtsOptions,
}: ConfigOptions) => {
    const external = getExternalConfig(rollupOptions, pkg)

    /**
     * dtsOptions을 별도로 주지 않으면 outDir에 엔트리의 모든 d.ts 파일을 생성
     */
    const dtsDefaultOptions = {
        outDir,
        rollupTypes: true,
    }

    const preserveModulesRoot = typeof entry === 'object' && !Array.isArray(entry) ? entry.index : entry.toString()

    return viteDefineConfig({
        plugins: [
            dts({
                ...(dtsOptions || dtsDefaultOptions),
            }),
            ...(plugins || []),
        ],
        build: {
            outDir,
            lib: {
                entry,
            },
            rollupOptions: {
                ...rollupOptions,
                external,
                output: [
                    {
                        format: 'es',
                        dir: outDir,
                        entryFileNames: (chunkInfo) => {
                            const subPath = chunkInfo.facadeModuleId?.split('src')[1]

                            if (subPath) {
                                const relativePath = subPath.startsWith('/') ? subPath.slice(1) : subPath
                                return replaceESMExtension(relativePath)
                            }

                            return `${chunkInfo.name}.mjs`
                        },
                        preserveModulesRoot,
                        preserveModules: true,
                        interop: 'esModule',
                    },
                ],
            },
            target,
        },
        resolve,
    })
}

export default defineConfig
