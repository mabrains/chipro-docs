---
title: Rename, Archive & Delete
description: Keep conversation metadata synchronized across the sidebar, archive, and active view.
---

# Rename, Archive & Delete

Mohet keeps metadata edits in sync so every tab shows the same conversation title, flow, and archive state.

## Renaming

- Editing a title updates both the local store and the paginated React Query cache so the sidebar and archive modal stay aligned.
- Flow badges stay attached to the conversation even after the title changes, making it easy to scan archives.

## Archiving

- The **Archive** button opens a searchable, infinite-scroll popup listing archived conversations.
- Each entry shows flow, created/updated dates, and buttons to **Unarchive** or **Delete permanently**.
- When viewing an archived conversation, a ribbon appears at the top stating that replies are blocked until it’s unarchived.

## Deleting

- Deleting requires confirmation in both the main list and archive modal to avoid accidental loss.
- Successful deletes trigger toast confirmations and remove the thread from all caches.

Design these controls to broadcast websocket events so other browser tabs refresh automatically.
