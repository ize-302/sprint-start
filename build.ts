// linux
await Bun.build({
  entrypoints: ["./src/cli.ts"],
  compile: {
    target: "bun-linux-x64",
    outfile: "./dist/sprint-start-linux-x64",
  },
});

await Bun.build({
  entrypoints: ["./src/cli.ts"],
  compile: {
    target: "bun-linux-arm64",
    outfile: "./dist/sprint-start-linux-arm64",
  },
});

// windows
await Bun.build({
  entrypoints: ["./src/cli.ts"],
  compile: {
    target: "bun-windows-x64",
    outfile: "./dist/sprint-start-windows-x64",
  },
});

// macos
await Bun.build({
  entrypoints: ["./src/cli.ts"],
  compile: {
    target: "bun-darwin-x64",
    outfile: "./dist/sprint-start-darwin-x64",
  },
});

await Bun.build({
  entrypoints: ["./src/cli.ts"],
  compile: {
    target: "bun-darwin-arm64",
    outfile: "./dist/sprint-start-darwin-arm64",
  },
});
