---
title: Install a Local Embedding Model
description: Guide users through selecting, downloading, and monitoring HuggingFace-based embeddings.
---

# Install a Local Embedding Model

When teams cannot send data to managed providers, Mohet’s onboarding modal supports installing HuggingFace models on local infrastructure.

## Setup Flow

1. **Choose Setup Path** – Select the local model option inside the embedding onboarding modal.
2. **Pick a Model** – Search pre-approved repos or paste a HuggingFace identifier. The modal shows disk, RAM, and context capabilities.
3. **Grant Access** – Supply HuggingFace tokens or private repo credentials when required.
4. **Download & Monitor** – Progress bars display bytes downloaded, estimated time remaining, and disk usage thresholds.
5. **Verify Service** – Once files land on disk, the modal confirms the embedding service is online and ready for traffic.

## Settings Integration

- The Settings **Local Model Install** tab surfaces the same forms plus a log viewer for troubleshooting.
- Admins can pause/resume downloads, change cache directories, or uninstall models entirely.
- Health badges match what appears in the chat header so operators know the installation status everywhere.

With a successful install, flows that require embeddings unlock automatically without changing any chat UI.
