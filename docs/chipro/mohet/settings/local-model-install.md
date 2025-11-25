---
title: Local Model Install Tab
description: Walk through the HuggingFace downloader embedded inside the Settings hub.
---

# Local Model Install Tab

For teams hosting embeddings themselves, the Settings hub exposes a **Local Model Install** tab that mirrors the onboarding modal with extra diagnostics.

## Form Fields

- **Model Identifier** – HuggingFace repo slug or internal registry path.
- **Cache Directory** – Where weights should be stored. Disk usage indicators warn when space runs low.
- **HF Token / Credentials** – Optional, only shown when the repo requires authentication.

## Download Monitor

- Shows real-time progress, estimated completion time, and throughput.
- Pause/Resume controls let admins manage bandwidth without restarting the entire download.
- Logs capture each step (resolving refs, downloading shards, extracting archives) for auditing.

## Post-Install Actions

- Buttons appear to test embeddings immediately or set the newly installed model as the active provider.
- Uninstall controls remove cached weights while leaving configuration intact for future installs.

Expose the same state through the global socket so users see alerts if the install pauses or fails while they are outside the Settings hub.
