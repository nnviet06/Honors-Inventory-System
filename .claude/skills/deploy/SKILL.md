User-only skill (appears in / menu, Claude never auto-triggers):
.claude/skills/deploy/SKILL.md
---
name: deploy
description: Deploy the application to production.
disable-model-invocation: true
allowed-tools: Bash
---

Run the deployment pipeline: `npm run deploy:prod`
Confirm with the user before proceeding.