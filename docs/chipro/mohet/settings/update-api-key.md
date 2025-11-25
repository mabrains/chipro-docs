---
title: Update API Key
description: Rotate provider credentials directly from the Settings hub.
---

# Update API Key

The Settings hub includes a lightweight **Update API Key** tab so operators can rotate credentials without leaving the conversation.

## Editing a Key

- Choose the provider from a dropdown; Mohet pre-fills the active key so you can edit or replace it.
- Fields include **Nickname**, **Secret**, and optional **Endpoint Override**.
- Validation runs instantly and displays progress next to the **Save** button.

## Post-Validation Behavior

- Successful saves trigger a toast and instruct the chat header to reload provider metadata.
- If validation fails, inline errors highlight whether the nickname, secret, or endpoint needs attention.
- The composer remains disabled until validation returns a healthy status.

Use this flow for quick rotations; more complex tasks (multiple keys per provider) belong on the [API Key Management](../providers/api-key-management.md) screen.
