import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs"; // 将 CommonJS 模块转换为 ES6，以便 Rollup 可以处理
// import { nodeResolve } from "@rollup/plugin-node-resolve"; // 告诉 Rollup 如何找到外部模块
import { terser } from "rollup-plugin-terser"; // 压缩 bundle
import { globSync } from "glob";
import fs from 'fs';


// 删除 dist 目录的所有文件
globSync('dist/*').forEach((fileOrDir) => {
  fs.rmSync(fileOrDir, { recursive: true, force: true });
});

// 获取 src 目录下所有的 index.ts 文件
const files = globSync("src/**/index.ts");
const config = files.map((file) => {
  // 提取文件名，例如 'tag' 或 'button'
  const fileName = file.match(/src\/(.*)\/index\.ts/)[1];

  return {
    input: file,
    output: [
      {
        file: `dist/${fileName}/${fileName}.esm.js`,
        format: "esm",
        sourcemap: true,
      },
      {
        file: `dist/${fileName}/${fileName}.cjs.js`,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      vue({
        target: "browser",
        css: false,
      }),
      commonjs(),
      typescript({check: false}),
      // terser(),
    ],
  };
});

export default config;
