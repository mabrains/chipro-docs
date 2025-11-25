---
title: Attachments & File Uploads
description: Understand how file cards, retries, and downloads behave inside Mohet conversations.
---

# Attachments & File Uploads

Attachments travel with the prompt so Mohet can summarize PDFs, inspect logs, or reason about design files.

## Upload UX

- The composer exposes an attachments button that is wired to the upload pipeline even when visually disabled.
- Selecting files spawns upload chips with progress indicators and retry/delete controls for failures.
- Each upload stores metadata (type, size, checksum) so the backend can scope what gets cached with the conversation.

## Message Rendering

- User messages display attachments as cards with file-type icons, filenames, and masked paths.
- Hovering or tapping surfaces download + copy buttons along with status (Uploaded, Pending, Failed).
- Assistant references to files link back to the card so context is never lost.

## Error Recovery

- Failed uploads stay inline with a retry CTA instead of disappearing.
- Retries reuse the cached file blob to avoid forcing the user to reselect the file.
- When a file is deleted before sending, the card slides out but a toast confirms the removal.

Design every attachment interaction so it works with both desktop drag-and-drop flows and lightweight mobile uploads.
