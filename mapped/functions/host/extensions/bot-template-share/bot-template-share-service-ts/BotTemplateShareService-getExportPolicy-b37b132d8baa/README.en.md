# `BotTemplateShareService.getExportPolicy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/bot-template-share/bot-template-share-service.ts` · [Module README](../../../../../../modules/host/extensions/bot-template-share/bot-template-share-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506098-506100](../../../../../../../reference/runtime/host-main.cjs#L506098-L506100) | `method` | no | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506098-506100](../../../../../../../reference/runtime/host-main.cjs#L506098-L506100) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:506098

Calls written directly in this body: `Promise.resolve`, `this.store.getExportPolicy`.

SHA-256 of the source span: `f5c8b8db47eb001c8a9389ee74f0eceb68287bf96c82509c9fb0ded15977b395`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
