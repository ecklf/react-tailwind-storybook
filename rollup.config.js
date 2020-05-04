import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
const tailwindcss = require("tailwindcss");

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  external: ["react"],
  plugins: [
    peerDepsExternal(),
    postcss({
      plugins: [
        tailwindcss("./tailwind.config.js"),
        require("autoprefixer"),
        require("cssnano")({ preset: "default" }),
      ],
    }),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      rollupCommonJSResolveHack: true,
      exclude: ["**/__tests__/**", "**/*.stories.tsx"],
      clean: true,
    }),
    commonjs({
      include: ["node_modules/**"],
    }),
    terser(),
  ],
};
