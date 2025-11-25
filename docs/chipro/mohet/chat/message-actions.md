---
title: Message Actions & Controls
description: Review the edit, copy, regenerate, and stop controls that keep transcripts manageable.
---

# Message Actions & Controls

Mohet keeps common actions next to each message so teams can debug or iterate quickly without leaving the transcript.

## User Message Actions

- **Edit & Resend** – Users can edit their most recent prompt inline; saving issues a new websocket command while preserving the prior message for reference.
- **Copy** – Copies the prompt (plus metadata if Compact Context is enabled) with a toast confirmation.
- **Flow Badges** – Each message shows which flow/model sent it so reviewing long transcripts stays straightforward.

## Assistant Message Actions

- **Copy** – Copies Markdown output with syntax preserved.
- **Regenerate** – Issues a `regenerate` command tied to the assistant message ID, reusing the original prompt.
- **Stop** – Appears while streaming to gracefully halt generation.
- **Thought Process Toggle** – Reveals the rationale or chain-of-thought text when enabled by admins.

## Tool & JSON Blocks

- Tool results include collapse/expand toggles, execution duration, and copy buttons for raw JSON.
- Error responses expose retry links that deep-link into provider settings or embeddings depending on the failure type.

Design your integrations so these actions map cleanly to backend commands; it keeps the chat timeline predictable even when teams experiment with different providers or flows.
