import {promises as fs} from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// 경로 설정
const iconsDir = path.resolve(dirname, '../', 'dist', 'components', 'icons')
const pkgPath = path.resolve(dirname, '../package.json')

// package.json 읽기
const pkgRaw = await fs.readFile(pkgPath, 'utf-8')
const pkg = JSON.parse(pkgRaw)

// exports 필드 없으면 생성
if (!pkg.exports) {
    pkg.exports = {}
}

// 아이콘 파일 목록 읽기
const iconFiles = await fs.readdir(iconsDir)

// 아이콘 파일에서 .mjs 확장자를 가진 파일만 필터링
for (const file of iconFiles) {
    if (!file.endsWith('.mjs')) {
        continue
    }
    const iconName = path.basename(file, '.mjs')
    const exportPath = `./icons/${iconName}`

    pkg.exports[exportPath] = {
        import: `./dist/components/icons/${iconName}.mjs`,
        types: `./dist/components/icons/${iconName}.d.ts`,
        default: `./dist/components/icons/${iconName}.mjs`,
    }
}

// package.json 덮어쓰기
await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 4) + '\n', 'utf-8')

// 성공 메시지 출력
// eslint-disable-next-line no-console
console.log('아이콘 exports가 package.json에 추가되었습니다.')
