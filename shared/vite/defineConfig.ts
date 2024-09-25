/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'node:path'

import {BuildOptions, defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

const normalizeOutput = (exportPath: string | {default: string}) => {
    return typeof exportPath === 'string' ? exportPath : exportPath?.default
}

export default ({
    pkg,
    entry,
    target,
}: {
    pkg: Record<string, any>
    entry: {index: string} & Record<string, string>
    target: BuildOptions['target']
}) => {
    const outputPath = pkg.exports ? pkg.exports['.'] : pkg.main

    const buildOutput = typeof outputPath === 'object' ? normalizeOutput(outputPath.import) : outputPath

    const outDir = path.dirname(buildOutput)

    return defineConfig({
        plugins: [
            dts({
                outDir,
                rollupTypes: true,
            }),
        ],
        build: {
            outDir,
            lib: {
                entry,
                formats: ['es'],
            },
            rollupOptions: {
                external: [...Object.keys(pkg.peerDependencies || {}), ...Object.keys(pkg.dependencies || {})].flatMap(
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
    })
}
