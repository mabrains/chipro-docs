---
title: Reinstall or Patch a PDK
sidebar_label: Reinstall
---

Use the reinstall workflow when a kit becomes corrupt, when the foundry releases a patch, or when you need to republish internal changes like new device models.

---

## When to reinstall

- Checksums fail during routine integrity scans.
- Automation logs show missing files or outdated LVS rules.
- You need to apply incremental deltas (e.g., hotfix for parasitic extraction) without manually deleting the kit first.

## Reinstallation steps

1. Open the PDK entry and click **Reinstall**.
2. Provide the new source artifact or Git ref. You can choose **In-place** (overwrite existing files) or **Shadow** (install to a new path, then switch references).
3. Optionally trigger **auto-migration** which updates dependent projects once the reinstall succeeds.
4. Confirm. The system stages files, validates checksums, and swaps symlinks/paths atomically so running jobs see a consistent state.

## Post-reinstall validation

- The status banner shows **Pending Validation** until smoke tests (DRC/LVS samples, symbol linting) finish.
- Notifications go out to project owners with a summary of what changed.
- The old version is retained for rollback until you manually purge it.

> Good practice: schedule reinstalls during low-traffic windows and enable shadow installs to avoid interrupting critical tape-out flows.
