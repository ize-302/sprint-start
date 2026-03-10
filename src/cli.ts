import { input, select, confirm } from "@inquirer/prompts";
import { exec } from "child_process";

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

  if (confirmation == true) {
    exec(
      `bash ./src/script.sh "${name}" "${description}" "${language}" "${type}" "${boot_version}" "${group_id}" "${artifact_id}" "${package_name}" "${java_version}"  "${target}"`,
      (err, stdout, stdrr) => {
        if (err) {
          console.log(err);
        }
        if (stdrr) {
          console.log(stdrr);
        }
        if (stdout) {
          console.log(stdout);
        }
      },
    );
  }
};

init();
