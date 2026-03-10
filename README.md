# Sprint Start

An interactive CLI tool for scaffolding Spring Boot projects — a wrapper around the [Spring CLI](https://docs.spring.io/spring-cli/reference/) that guides you through project setup with prompts.

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

Download the appropriate binary for your platform from the releases page and run it directly.

```bash
./sprint-start-linux-x64
```

Available binaries:

- `sprint-start-linux-x64`
- `sprint-start-linux-arm64`
- `sprint-start-windows-x64`
- `sprint-start-darwin-x64`
- `sprint-start-darwin-arm64`

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
bun build.ts
```

Binaries are output to `./build/`.
