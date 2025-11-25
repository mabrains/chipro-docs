---
title: Chat Experience Overview
description: Understand how the layout, timeline, and streaming engine come together inside Mohet chat.
---

# Chat Experience Overview

Mohet’s chat route combines a two-pane layout, flow-aware composer, and websocket-driven status stack. Use these guides to understand how each part behaves before mirroring the UX in your own demos or tests.

## Layout

[Chat Layout](./chat-layout.md) covers the responsive sidebar, welcome state, and navigation shortcuts so you can mirror the `/mohet` shell on desktop and mobile.

## Messaging

[Sending Messages](./sending-messages.md) and [Attachments](./attachments.md) detail how the composer treats prompts, files, and context toggles, while [Streaming & Status](./streaming-and-status.md) explains the socket lifecycle and banner updates.

## Actions & Flows

[Message Actions](./message-actions.md) highlights copy, edit, and regenerate affordances, and [Flows](./flows.md) walks through the Default, Basic Analog, and Basic Digital behaviors that can be toggled mid-session.

Read each section in order for a full picture of what the chat workspace expects from the backend.
