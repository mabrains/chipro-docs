---
title: Resolve Missing PDKs
sidebar_label: Missing
---

When a project references a PDK that is offline or deleted, Chipro flags it as **Missing** so you can restore access before automation fails.

---

## How missing PDKs are detected

- The scheduler runs heartbeat checks against every installed kit.
- Projects that reference a deleted or corrupted kit receive a warning banner and email/Slack alert.
- The Workspace Sidebar shows a badge with the number of affected projects.

## Recovery options

1. **Reinstall the original kit** (preferred): use the reinstall flow with the last known artifact.
2. **Swap projects to another kit**: edit each project and choose a different installed PDK.
3. **Import from snapshot**: if you exported the kit previously, upload the snapshot to restore files.

## Workflow in the UI

- Click the **Missing PDKs** tab in the PDK Manager to see what’s impacted.
- Each row displays the missing kit name, last known version, and list of dependent projects.
- Use the quick actions to reinstall, reassign, or archive the affected projects.

## Preventative measures

- Enable redundancy: replicate kits across two storage targets.
- Schedule automated checksum scans and notify admins on failure.
- Document handoffs when deprecating a kit so teams have a migration plan before deletion happens.
