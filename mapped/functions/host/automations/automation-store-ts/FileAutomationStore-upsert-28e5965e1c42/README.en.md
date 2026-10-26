# `FileAutomationStore.upsert`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720606-720617](../../../../../../reference/runtime/host-main.cjs#L720606-L720617) | `method` | no | `spec, provenance, createdAt = Date.now()` |
| [evaluation:627957-627968](../../../../../../reference/runtime/sand-eval-runner.cjs#L627957-L627968) | `method` | no | `spec, provenance, createdAt = Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720606-720617](../../../../../../reference/runtime/host-main.cjs#L720606-L720617) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627957-627968](../../../../../../reference/runtime/sand-eval-runner.cjs#L627957-L627968) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:720606

Calls written directly in this body: `automationConfigFromSpec`, `this.count`, `this.toRecord`, `this.uniqueId`, `this.writeConfig`.

SHA-256 of the source span: `113e1e492c193b8c17c9415f10777b540c93bbc75afcc9ae6dbce6194310aa32`.

### evaluation:627957

Calls written directly in this body: `automationConfigFromSpec`, `this.count`, `this.toRecord`, `this.uniqueId`, `this.writeConfig`.

SHA-256 of the source span: `113e1e492c193b8c17c9415f10777b540c93bbc75afcc9ae6dbce6194310aa32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
