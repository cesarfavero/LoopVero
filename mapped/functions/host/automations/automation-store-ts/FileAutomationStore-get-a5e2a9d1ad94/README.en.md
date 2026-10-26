# `FileAutomationStore.get`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720595-720599](../../../../../../reference/runtime/host-main.cjs#L720595-L720599) | `method` | no | `id` |
| [evaluation:627946-627950](../../../../../../reference/runtime/sand-eval-runner.cjs#L627946-L627950) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720595-720599](../../../../../../reference/runtime/host-main.cjs#L720595-L720599) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:627946-627950](../../../../../../reference/runtime/sand-eval-runner.cjs#L627946-L627950) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:720595

Calls written directly in this body: `isSafeFolderId`, `this.readConfig`, `this.toRecord`.

SHA-256 of the source span: `1867fc401ef9f125f8154ddc5315048ec48d49679bb5e10d8edbfca35a8e55dd`.

### evaluation:627946

Calls written directly in this body: `isSafeFolderId`, `this.readConfig`, `this.toRecord`.

SHA-256 of the source span: `1867fc401ef9f125f8154ddc5315048ec48d49679bb5e10d8edbfca35a8e55dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
