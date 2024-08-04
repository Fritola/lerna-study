import typescript from 'rollup-plugin-typescript2';

export default {
    input: ["src/index.ts"],
    output: [
        {
            dir: "lib",
            entryFileNames: "[name].js",
            format: "cjs",
            exports: "named"
        }
    ],
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    module: "ESNext"
                },
                include: ['src/**/*'],
            },
        }),
    ],
    external: ["react"]
};