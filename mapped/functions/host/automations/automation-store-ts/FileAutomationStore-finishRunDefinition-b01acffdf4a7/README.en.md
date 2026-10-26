# `FileAutomationStore.finishRunDefinition`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720729-720748](../../../../../../reference/runtime/host-main.cjs#L720729-L720748) | `method` | no | `{     id,     runId,     status,     at: at3 = Date.now(),     detail,     errorKind,     requestId: requestId2   }` |
| [evaluation:628080-628099](../../../../../../reference/runtime/sand-eval-runner.cjs#L628080-L628099) | `method` | no | `{     id,     runId,     status,     at: at3 = Date.now(),     detail,     errorKind,     requestId   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720729-720748](../../../../../../reference/runtime/host-main.cjs#L720729-L720748) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:628080-628099](../../../../../../reference/runtime/sand-eval-runner.cjs#L628080-L628099) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:720729

Calls written directly in this body: `this.finishRunWith`.

SHA-256 of the source span: `771604583ea6fb78325a6f23e34b9b3a3e13defaded388cc0aad534512008965`.

### evaluation:628080

Calls written directly in this body: `this.finishRunWith`.

SHA-256 of the source span: `9d8ffc5640c0175ea315c61b6f96d89ffd45f348f8c0b8dae23cb5a463b11a5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
