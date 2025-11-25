---
title: Streaming & Status Events
description: Trace how the useChatSocket hook manages lifecycle, status banners, and error recovery.
---

# Streaming & Status Events

Mohet relies on a websocket hook called `useChatSocket` to keep the chat experience real time. The hook wires up initialization commands, status events, streaming payloads, and graceful termination so the UI always knows what the model is doing.

## Lifecycle

1. **Init** – When a conversation mounts, the hook sends an initialization command containing provider, model, flow, and conversation ID.
2. **Pending Queue** – Prompts typed while the socket connects are queued; they flush as soon as the server confirms the connection.
3. **Status Updates** – Events such as `model_thinking` provide timer text like “Model is thinking… (3s)” so users know the assistant is working.
4. **Streaming** – Assistant replies stream token-by-token. Partial content updates the active message while token counters increment.
5. **Tool Calls** – Tool-call payloads (reasoning traces, Librelane automation outputs) arrive as JSON blocks that the UI renders inline.
6. **Termination** – Successful completions or stop actions emit final status events so the UI can re-enable the composer.

## Error Handling

- Socket drops trigger exponential backoff reconnects and display a toast.
- If the backend sends an `auth_error`, the global PageWrapper surfaces a modal instructing the user to refresh credentials.
- Regenerate/editor requests send targeted commands referencing the original message IDs.

Pair these lifecycle details with the [Message Actions](./message-actions.md) guide to see how UI-level controls map to websocket events.
