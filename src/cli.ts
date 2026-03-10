import { input, select, confirm } from "@inquirer/prompts";
import { writeFileSync } from "fs";
import { spawnSync } from "child_process";
import { join } from "path";
import { tmpdir } from "os";

const script = `#!/bin/bash
name=$1
description=$2
language=$3
type=$4
boot_version=$5
group_id=$6
artifact_id=$7
package_name=$8
java_version=$9
target=\${10}

cmd=(
  spring init
  --name "\$name"
  --description "\$description"
  --language "\$language"
  --type "\$type"
  --boot-version "\$boot_version"
  --group-id "\$group_id"
  --artifact-id "\$artifact_id"
  --package-name "\$package_name"
  --java-version "\$java_version"
  "\$target"
)

"\${cmd[@]}"`;

const init = async () => {
  const name = await input({
    message: "Project name",
    default: "my-app",
  });
  const description = await input({
    message: "Project description",
    default: "...",
  });
  const language = await select({
    message: "Select language",
    default: "java",
    choices: [
      {
        name: "Java",
        value: "java",
      },
      {
        name: "Kotlin",
        value: "kotlin",
      },
      {
        name: "Groovy",
        value: "groovy",
      },
    ],
  });
  const type = await select({
    message: "Select project type",
    default: "gradle-project",
    choices: [
      {
        name: "Gradle",
        value: "gradle-project",
      },
      {
        name: "Maven",
        value: "maven-project",
      },
    ],
  });

  const java_version = await select({
    message: "Select java version",
    default: 25,
    choices: [
      {
        name: "25",
        value: 25,
      },
      {
        name: "21",
        value: 21,
      },

      {
        name: "17",
        value: 17,
      },
    ],
  });
  const boot_version = await input({
    message: "Select spring boot version",
    default: "3.5.0",
  });
  const group_id = await input({
    message: "Group",
    default: "com.example",
  });
  const artifact_id = await input({
    message: "Artifact",
    default: "demo",
  });
  const package_name = await input({
    message: "Package name",
    default: "com.example." + artifact_id,
  });
  const target = await input({
    message: "Enter target location",
    default: "demo",
  });

  const confirmation = await confirm({ message: "Continue with setup?" });

  if (confirmation) {
    const tmpScriptPath = join(tmpdir(), "script.sh");
    writeFileSync(tmpScriptPath, script, { mode: 0o755 });

    const result = spawnSync(
      tmpScriptPath,
      [
        name,
        description,
        language,
        type,
        boot_version,
        group_id,
        artifact_id,
        package_name,
        java_version.toString(),
        target,
      ],
      { stdio: "inherit" },
    );

    if (result.error) console.error(result.error);
  }
};

init();
