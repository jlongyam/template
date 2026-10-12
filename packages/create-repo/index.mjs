#!/usr/bin/env node

import { text, select, isCancel } from "@clack/prompts";

const projectName = await text({
  message: "What is your project name?",
  placeholder: "test-project",
  validate: (value) => value ? undefined : 'Project name is required'
});

if (isCancel(projectName)) {
  console.log("Operation cancelled.");
  process.exit(0);
}

const template = await select({
  message: "Pick a template:",
  options: [
    { value: "default", label: "Basic" },
    { value: "monorepo", label: "Monorepo" },
    { value: "library", label: "Library" },
    { value: "website", label: "Website" },
  ],
});

const cwd = process.cwd();

console.log(projectName);
console.log(process.cwd());
console.log(template);
