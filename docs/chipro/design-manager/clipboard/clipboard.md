---
title: Clipboard System
description: Learn how Chipro copies, moves, and pastes cells or views inside Design Manager.
---

# Clipboard System

Chipro supports a flexible Copy / Move workflow that lets you reorganize your project quickly.  
You can duplicate cells, move them between libraries, and transfer views between cells — all through a consistent, guided interface that keeps selections, sources, and targets in sync.

Use this page as the entry point to the clipboard experience, then dive into task-specific guides for cells and views.

---

## How the Clipboard Works

1. **Select items** – Activate selection mode from the toolbar, then highlight the cells or views you want to manipulate.
2. **Choose Copy or Move** – Chipro records the items, the source context, and which action you selected.
3. **Navigate to a target** – The Paste button appears only when the destination is valid for the stored item type.
4. **Run Paste** – Review the source, target, and configuration in the dialog, then confirm the action.

---

## Clipboard Actions for Cells

- Learn how to [copy and move cells between libraries or categories](../clipboard/cells.md).
- See how the paste dialog validates destinations, updates metadata, and tracks change history.

## Clipboard Actions for Views

- Walk through [copying or moving schematic/layout views between cells](../clipboard/views.md).
- Understand how Chipro enforces compatibility so you can only paste views into valid targets.

---

## Key Notes

- You cannot paste views into a category or library — only into a **cell**.
- You cannot paste cells into another cell — only into a **library or category**.
- The Paste button appears only when the destination is valid.
- Changes propagate immediately without refreshing.
