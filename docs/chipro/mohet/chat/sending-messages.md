---
title: Sending Messages
description: See how the composer, prompts, and assistant replies behave inside the chat timeline.
---

# Sending Messages

Mohet pairs rich message rendering with a flow-aware composer so conversations stay readable and actionable.

## User Prompts

- Metadata chips indicate which flow and model were active when the message was sent.
- Users can edit or copy their latest prompt directly from the transcript without opening a modal.
- Pending prompts queue while the websocket connects, then stream once the server acknowledges the session.

## Composer Experience

- Theme gradients and placeholder text change based on the selected flow (Default, Basic Analog, Basic Digital).
- The textarea auto-resizes, supports `Shift+Enter` for newlines, and sends on `Enter`.
- A **Stop** button appears mid-stream to halt generation gracefully.
- The **Compact Context** toggle (bookmark icon) determines whether additional metadata is saved with outgoing messages.

## Assistant Responses

- Render Markdown with code blocks, tables, and KaTeX for math-heavy answers.
- Tool calls and responses appear as collapsible JSON viewers with execution duration.
- Token stats show input/output counts and rate limiting for easy debugging.

## Status Banner & Scrolling

- A sticky banner above the transcript swaps between spinner text, success notices, or toast-style errors.
- Auto-scroll keeps the latest token in view unless the user scrolls up; a “Scroll to bottom” chip appears when the transcript is paused.

Pair this guide with [Attachments](./attachments.md) for the files pipeline and [Streaming & Status](./streaming-and-status.md) for websocket details.
