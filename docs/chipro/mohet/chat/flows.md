---
title: Flow Management
description: Switch between Default, Basic Analog, and Basic Digital flows without losing context.
---

# Flow Management

Mohet ships with three opinionated flows—**Default**, **Basic Analog**, and **Basic Digital**—that adjust prompt scaffolding, guardrails, and downstream automation settings.

## Choosing a Flow

- In the welcome state, the flow picker appears as a popover with descriptive text and icons so users can preview each option before their first message.
- Each flow defines its own prompt styling, context window hints, and recommended models.

## Active Sessions

- When a conversation already exists, clicking the flow icon opens a warning modal that encourages users to start a new chat before switching flows.
- If they proceed, Mohet records the change inside the conversation metadata and sends a websocket event so the backend updates routing.
- Flow badges appear next to conversation titles in the sidebar, making it easy to scan large archives.

## Backend Impact

- Flow selection modifies the server payload used for new conversations (system prompts, safety rules, automation hooks).
- Some flows unlock provider-specific features, such as analog-focused toolkits or digital verification shortcuts.
- When embeddings are required, the flow picker disables options until the embedding provider passes validation.

Design conversations around flows so teams can enforce best practices per discipline without confusing new users.
