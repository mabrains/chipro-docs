---
title: Choose an Embedding Provider
description: Pick between managed and local options while keeping the workspace compliant.
---

# Choose an Embedding Provider

Whether teams prefer managed APIs or on-prem models, Mohet keeps the selection process consistent so embeddings stay reliable.

## Managed Providers

- Tabs explain latency, pricing, and token limits for each managed provider.
- Adding a key mirrors the standard API key workflow but highlights which models expose embedding endpoints.
- Validation pings the provider with a lightweight embed request to ensure credentials and endpoints work.

## Local Providers

- The onboarding modal offers a “Local” tab that guides users through pointing Mohet at an existing embedding service.
- Forms capture hostnames, ports, TLS settings, and optional authentication tokens.
- Health checks run continuously and surface toast alerts when the service stops responding.

## Switching Providers

- The Settings **Embeddings** tab lists every configured provider with radio buttons to set the active one.
- Changing providers replays a health check before enabling flows that depend on embeddings.
- Conversation metadata tracks which provider generated each response to aid debugging or audits.

Encourage teams to document which provider they selected so future troubleshooting goes faster.
