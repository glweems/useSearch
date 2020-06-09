import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json";
import figlet from "figlet";

figlet(packageJson.name, (err, data) => {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.info(`Version: ${packageJson.version}`);
  console.info(`Author: ${packageJson.author}`);
  console.log(data);
});

export default {
  input: "src/useSearch.ts",
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true,
    },
    {
      dir: "build",
      format: "esm",
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: "node_modules/**",
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(), // minifies generated bundles
  ],
};

/* import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";


export default {
  input: "src/index.ts", // our source file

  output: {
    dir: "dist",
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies),
  ],
  plugins: [
    typescript({
      tsconfigOverride: { noEmit: false },
      typescript: require("typescript"),
    }),
    terser(), // minifies generated bundles
  ],
}; */
