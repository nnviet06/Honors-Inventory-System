Auto-only skill (hidden from / menu, Claude triggers it):
.claude/skills/detect-secrets/SKILL.md
---
name: detect-secrets
description: Automatically scan for secrets when files are modified. Use PROACTIVELY whenever the user edits a config or env file.
user-invocable: false
allowed-tools: Read, Grep
---

Scan the recently modified file for hardcoded secrets, API keys, or credentials.
If found, warn the user immediately. If clean, stay silent.
