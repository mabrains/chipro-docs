---
title: Create a New Conversation
description: Understand how welcome states, flows, and quick actions start a fresh chat.
---

# Create a New Conversation

When `/mohet` loads without a conversation ID, the workspace drops into a welcome state that encourages teams to start chatting immediately.

## Welcome State

- A hero message greets the user and reiterates Mohet’s capabilities.
- CTA buttons highlight popular flows (Default, Basic Analog, Basic Digital) as starting points.
- Selecting a flow preconfigures the composer with the right prompt scaffolding and recommended model.

## Quick Actions

- The **New Chat** button clears the composer and opens a blank conversation while keeping the current flow.
- Keyboard shortcuts trigger the same action so power users can spin up a conversation without touching the mouse.

## Metadata Capture

- When the first message sends, the backend stores provider, model, flow, and embedding provider as part of the conversation metadata.
- If the user switches flows/models before sending, those new values become the defaults for the upcoming conversation.

These mechanics keep new conversations fast to create while ensuring each chat starts with the correct routing information.
