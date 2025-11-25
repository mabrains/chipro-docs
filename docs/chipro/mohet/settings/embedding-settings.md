---
title: Embedding Settings Tab
description: Configure providers, health checks, and warnings from the Settings hub.
---

# Embedding Settings Tab

The Settings hub dedicates a tab to embeddings so teams can manage providers, local models, and health signals without bouncing through multiple pages.

## Provider Table

- Lists every configured embedding provider with radio buttons to choose the active one.
- Health badges (`Online`, `Syncing`, `Paused`) match what appears in the chat header.
- Quick links take users to provider documentation or support articles.

## Controls

- Toggle embeddings on/off for individual flows, ensuring sensitive projects only use approved providers.
- Provide HuggingFace tokens, repo IDs, and cache directories when the selected provider requires them.
- Use filters/search to find specific models across large installations.

## Alerts & Guidance

- Warning banners explain why embeddings matter when none are active, with a button that re-opens the onboarding modal.
- Success banners summarize which flows unlocked once embeddings validated.

Pair this tab with the [Choose an Embedding Provider](../embeddings/choose-embedding-provider.md) and [Install a Local Embedding Model](../embeddings/install-local-model.md) guides for deeper implementation details.
