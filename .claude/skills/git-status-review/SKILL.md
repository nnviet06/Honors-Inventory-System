---
  name: git-status-review
  description: Review uncommitted changes and suggest what to do next.
  allowed-tools: Bash(git diff:*), Bash(git log:*)
---

Current git status:
  !`git status --short`

Recent commits:
  !`git log --oneline -5`

Based on the above, describe what's changed and suggest a commit message or next step.