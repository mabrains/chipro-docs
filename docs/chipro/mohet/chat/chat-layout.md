---
title: Chat Layout & Navigation
description: Explore the responsive chat shell, sidebar behavior, and welcome state on /mohet.
---

# Chat Layout & Navigation

Mohet uses a responsive two-pane layout so the conversation list and active chat stay in view while preserving mobile usability.

## Sidebar & Conversation List

- **Desktop** – The sidebar can collapse into icon mode or expand to show full conversation titles. Quick actions for *New Chat*, *Archive*, *Settings*, and *Profile* sit at the top.
- **Mobile** – Opening the sidebar triggers a full-screen overlay with swipe-to-close gestures for safe use on touch devices.
- **Conversation Groups** – Threads are grouped by day, support infinite scroll, and expose rename/archive/delete popovers directly in the list.

## Main Pane

- Houses the conversation header, message timeline, and composer.
- Auto-adjusts padding when the sidebar collapses so content stays centered.
- Includes shortcuts to open settings or profile menus without leaving the route.

## Welcome State

When `/mohet` loads without a conversation ID:

- A hero message greets the user and re-iterates Mohet’s capabilities.
- The composer is already targeted at the default flow/model so typing instantly spins up the first conversation.
- CTA buttons highlight popular flows (Default, Basic Analog, Basic Digital) as starting points.

## Navigation Shortcuts

- **New Chat** – Clears the composer and opens a blank conversation while keeping the current flow.
- **Archive Popup** – Lists archived conversations with restore/delete controls.
- **Settings Button** – Persistent entry point to the settings hub.
- **Profile Menu** – Provides workspace context, logout, and support links.
