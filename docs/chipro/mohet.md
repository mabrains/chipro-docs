---
title: Mohet
description: Conversational AI copilot that accelerates circuit design, debugging, and automation inside Chipro.
sidebar_position: 2
---

# Mohet Chat

Mohet is the AI companion that lives directly inside the Chipro workspace. It understands semiconductor terminology, SPICE/Verilog syntax, and the hierarchy that Design Manager exposes, so every reply is grounded in the active project and cell context.

---

## Typical Use Cases

- **Instant Q&A** – Ask for device sizing tips, layout guard-ring reminders, LVS/DRC explanations, or quick SPICE syntax snippets.
- **Workflow guidance** – Request step-by-step instructions (e.g., “prep this cell for ngspice Monte Carlo”) that match your project’s PDK and category rules.
- **Data inspection** – Summarize metadata from the currently selected cell, highlight missing views, or explain why a library is locked.
- **Automation hand-offs** – Draft job manifests, run Librelane flows, or open VNC editors by name without touching the sidebar.

---

## Context Awareness

Mohet subscribes to the same lightweight store that powers Design Manager:

1. When you switch projects or libraries, the AI session automatically resets dependent filters to avoid stale answers.
2. Clipboard-based selections (cells, categories) are streamed to the chat so you can say “paste those into X15” or “assign these to RF Front-End.”
3. Layout preferences (open panels, active theme) persist, so Mohet can mirror your layout when it opens tools on your behalf.
