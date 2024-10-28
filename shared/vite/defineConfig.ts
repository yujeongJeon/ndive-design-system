/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'node:path'

import {AliasOptions, BuildOptions, defineConfig, PluginOption, ResolveOptions} from 'vite'
import dts from 'vite-plugin-dts'

export type DistributiveOmit<T, U extends keyof any> = T extends object ? Omit<T, U> : never
type CustomBuildOptions = DistributiveOmit<BuildOptions['rollupOptions'], 'output'>

export default ({
    pkg,
    buildOptions: {entry, target},
    rollupOptions,
    resolve,
    plugins,
}: {
    pkg: Record<string, any>
    buildOptions: {
        entry: {index: string} & Record<string, string>
        target: BuildOptions['target']
    }
    rollupOptions?: CustomBuildOptions
    resolve?: ResolveOptions & {
        alias?: AliasOptions
    }
    plugins?: PluginOption[]
}) => {
    const outputPath = pkg.exports ? pkg.exports['.'] : pkg.main

    const buildOutput =
        typeof outputPath === 'string' ? outputPath : ((outputPath.import || outputPath.default) as string)

    if (!buildOutput) {
        throw new Error('"exports[\'.\']" 필드가 올바르지 않습니다.')
    }

    const outDir = path.dirname(buildOutput)

    return defineConfig({
        plugins: [
            dts({
                outDir,
                rollupTypes: true,
            }),
            ...(plugins || []),
        ],
        build: {
            outDir,
            lib: {
                entry,
                formats: ['es'],
            },
            rollupOptions: {
                ...rollupOptions,
                external:
                    rollupOptions?.external ||
                    [...Object.keys(pkg.peerDependencies || {}), ...Object.keys(pkg.dependencies || {})].flatMap(
                        (dep) => [dep, new RegExp(`^${dep}/.*`)],
                    ),
                output: [
                    {
                        format: 'es',
                        dir: outDir,
                        entryFileNames: `[name]${path.extname(buildOutput)}`,
                        preserveModulesRoot: path.dirname(entry.index),
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
