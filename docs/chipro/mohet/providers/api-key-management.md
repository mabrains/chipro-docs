---
title: API Key Management
description: Add, edit, revalidate, or delete provider keys from a single screen.
---

# API Key Management

Each provider tab focuses on CRUD workflows for API keys so admins can keep Mohet online without digging through multiple menus.

## Adding a Key

1. Click **Add Key** within the provider tab.
2. Fill in **Name**, **API Key/Secret**, and optional **Endpoint Override** fields.
3. Validation runs immediately; progress indicators show success or highlight fields that failed.
4. Successful keys appear as cards with masked values and metadata (created, last validated, models unlocked).

## Key Cards

Every key card includes:

- **Show / Hide** – Temporarily reveal the secret for copy/paste.
- **Copy** – Copies the token with a confirmation toast.
- **Re-validate** – Re-runs the test command without editing the key.
- **Edit** – Opens the drawer with pre-filled endpoint + secret.
- **Delete** – Requires confirmation and instantly revokes access in the chat header.

## Bulk Behavior

- Tabs support multiple keys per provider; primary keys are highlighted and set as defaults for the chat header selector.
- React Query caches invalidate after mutations, keeping cards in sync without a full refresh.
- Deep links guide users to provider settings or support portals for quota, billing, or general troubleshooting.
