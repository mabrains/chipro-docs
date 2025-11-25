---
title: Provider Tabs
description: See how each provider is presented inside the API key management screen.
---

# Provider Tabs

The `/apikey-management` route exposes every provider Mohet supports. Each provider appears as a tab with its own loading, error, and empty states so admins can tell at a glance which integrations are healthy.

## Loading State

Skeleton cards mirror where key data will appear so the layout remains stable while data loads.

## Error State

Inline alerts detail why data could not load and provide retry + support links. When retries fail, the alert links out to the provider’s status page.

## Empty State

Helpful copy encourages users to add a key, with CTA buttons and docs for that provider. The same buttons appear after a failed validation so users always know what to do next.

## Tab Controls

- Tabs remember the last provider you opened so refreshes return to that view.
- Permission checks hide providers the workspace is not licensed to use.
- Each tab exposes an **Add Key** button plus filters for providers that accept multiple keys.

Design every tab with the same structure so providers can be added or removed without redesigning the page.
