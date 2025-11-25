---
title: Validation & Error States
description: Communicate the status of each API key with shared badges and inline help.
---

# Validation & Error States

Validation happens both inside the setup wizard and across the `/apikey-management` surface. Consistent status messaging keeps operators confident that Mohet is using healthy credentials.

## Status Badges

- **Valid** – Green badge used in tabs, chat header selectors, and key cards once the last validation succeeded.
- **Pending** – Appears while a test call is running; disables the composer and key actions until the result returns.
- **Invalid** – Red badge paired with inline help and links to docs/support.

## Inline Errors

- Failed validations highlight the exact field (name, secret, endpoint) that caused the issue.
- Global alerts summarize rate limits, billing problems, or provider outages when the backend surfaces that metadata.
- Retry buttons run validation again without closing the drawer.

## Propagation

- When a key transitions to **Invalid**, the chat header immediately locks the composer and surfaces an **Authentication Failed** dialog if the workspace keeps prompting.
- System toasts broadcast through the global socket so other tabs refresh and show the right badge.

Describe every failure in actionable terms so teams know whether to edit the key, review billing, or switch providers.
