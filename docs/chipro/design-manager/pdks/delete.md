---
title: Delete a PDK
sidebar_label: Delete
---

Deleting a PDK frees storage and keeps the workspace list manageable. Because projects depend on PDKs, deletion includes safeguards to prevent breaking active work.

---

## Before deleting

- Confirm no active projects reference the kit. The UI shows a dependency count and links to affected projects.
- Ensure archived snapshots exist if you might need the kit in the future.
- Only admins or designated CAD owners can perform this action.

## Deletion steps

1. Open the PDK entry and click **Delete**.
2. Review the confirmation dialog listing dependent projects, libraries, and automation caches.
3. Choose what to do with worker caches (purge immediately or let them expire on next sync).
4. Type the PDK name to confirm and press **Delete PDK**.

## After deletion

- Dependent projects fall back to a "PDK Missing" state until you assign a new kit.
- All automation integrations receive webhooks indicating the kit was removed so they can clean up cached files.
- Activity logs capture who deleted the kit and which dependencies were affected.

> Consider archiving by revoking access if you only need to hide the kit temporarily—deletion is permanent once caches are purged.
