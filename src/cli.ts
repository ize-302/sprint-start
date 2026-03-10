import { input, select, confirm } from "@inquirer/prompts";
import { select as selectMultiple } from "inquirer-select-pro";
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
dependencies=\${10}
target=\${11}

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
  --dependencies "\$dependencies"
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
  const dependencies = await selectMultiple({
    message: "Select dependencies",
    options: [
      // Core Web & Backend
      { name: "Web (Spring MVC + Tomcat)", value: "web" },
      {
        name: "Reactive Web (WebFlux + Netty)",
        value: "webflux",
      },
      {
        name: "JPA / Hibernate (SQL DB)",
        value: "data-jpa",
      },
      { name: "MongoDB", value: "data-mongodb" },
      { name: "Redis", value: "data-redis" },
      { name: "JDBC", value: "jdbc" },

      // Security & Auth
      { name: "Spring Security", value: "security" },
      { name: "OAuth2 Client", value: "oauth2-client" },
      {
        name: "OAuth2 Resource Server",
        value: "oauth2-resource-server",
      },

      // Messaging & Streaming
      { name: "RabbitMQ (AMQP)", value: "amqp" },
      { name: "Apache Kafka", value: "kafka" },
      { name: "Cloud Gateway", value: "cloud-gateway" },
      { name: "Config Client", value: "cloud-config-client" },

      // Batch & Scheduling
      { name: "Batch Processing", value: "batch" },
      { name: "Quartz Scheduler", value: "quartz" },

      // Template Engines
      { name: "Thymeleaf Templates", value: "thymeleaf" },
      { name: "Freemarker Templates", value: "freemarker" },
      { name: "Mustache Templates", value: "mustache" },

      // Actuator & Monitoring
      {
        name: "Validation (Bean Validation)",
        value: "validation",
      },
      {
        name: "Actuator (Health, Metrics)",
        value: "actuator",
      },
    ],
  });

  console.log(dependencies.toString());

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
        dependencies.toString(),
        target,
      ],
      { stdio: "inherit" },
    );

    if (result.error) console.error(result.error);
  }
};

init();
