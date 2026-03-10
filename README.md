# Sprint Start

An interactive CLI tool for scaffolding Spring Boot projects — a wrapper around the [Spring CLI](https://docs.spring.io/spring-cli/reference/) that guides you through project setup with prompts.

![demo](demo.gif)

## Features

- Interactive prompts for all project options
- Supports Java, Kotlin, and Groovy
- Choose between Gradle and Maven build systems
- Select Java version (17, 21, or 25)
- Configure group ID, artifact ID, package name, and more

## Requirements

- [Spring CLI](https://docs.spring.io/spring-cli/reference/) installed and available on your `PATH`
- [Bun](https://bun.sh) (for running from source)

## Usage

### From source

```bash
bun install
bun src/cli.ts
```

### From binary

Download the appropriate binary for your platform from the releases page, then follow the installation steps below.

#### Linux

```bash
chmod +x sprint-start-linux-x64
mkdir -p ~/.local/bin
mv sprint-start-linux-x64 ~/.local/bin/sprint-start
```

Make sure `~/.local/bin` is on your `PATH` (add to `~/.bashrc` or `~/.zshrc` if needed):

```bash
export PATH="$HOME/.local/bin:$PATH"
```

Then run with:

```bash
sprint-start
```

#### macOS

```bash
chmod +x sprint-start-darwin-arm64   # or sprint-start-darwin-x64 for Intel
mkdir -p ~/.local/bin
mv sprint-start-darwin-arm64 ~/.local/bin/sprint-start
```

Add `~/.local/bin` to your `PATH` in `~/.zshrc` if not already present:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

If macOS blocks the binary as an unverified app, remove the quarantine attribute:

```bash
xattr -d com.apple.quarantine ~/.local/bin/sprint-start
```

Then run with:

```bash
sprint-start
```

#### Windows

Move the downloaded binary to a folder of your choice, for example `C:\tools\`, then add that folder to your `PATH`:

1. Open **Start** and search for **Environment Variables**
2. Under **User variables**, select **Path** and click **Edit**
3. Click **New** and add `C:\tools`
4. Click **OK** to save

Rename the binary for convenience:

```powershell
Rename-Item sprint-start-windows-x64.exe sprint-start.exe
```

Then run with:

```powershell
sprint-start
```

Available binaries:

| Binary                      | Platform          |
| --------------------------- | ----------------- |
| `sprint-start-linux-x64`    | Linux (x86_64)    |
| `sprint-start-linux-arm64`  | Linux (ARM64)     |
| `sprint-start-windows-x64`  | Windows (x86_64)  |
| `sprint-start-darwin-x64`   | macOS (Intel)     |
| `sprint-start-darwin-arm64` | macOS (Apple Silicon) |

## Prompts

| Prompt              | Description               | Default                  |
| ------------------- | ------------------------- | ------------------------ |
| Project name        | Name of the application   | `my-app`                 |
| Description         | Short project description | `...`                    |
| Language            | Java, Kotlin, or Groovy   | Java                     |
| Project type        | Gradle or Maven           | Gradle                   |
| Java version        | 17, 21, or 25             | 25                       |
| Spring Boot version | Boot version to use       | `3.5.0`                  |
| Group               | Maven group ID            | `com.example`            |
| Artifact            | Maven artifact ID         | `demo`                   |
| Package name        | Root package name         | `com.example.<artifact>` |
| Target location     | Output directory          | `demo`                   |

## Building

```bash
bun run build
```

Binaries are output to `./dist/`.
