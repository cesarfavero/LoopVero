# `FileAutomationStore.listDefinitions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720585-720594](../../../../../../reference/runtime/host-main.cjs#L720585-L720594) | `method` | no | `(none)` |
| [evaluation:627936-627945](../../../../../../reference/runtime/sand-eval-runner.cjs#L627936-L627945) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720585-720594](../../../../../../reference/runtime/host-main.cjs#L720585-L720594) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:627936-627945](../../../../../../reference/runtime/sand-eval-runner.cjs#L627936-L627945) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:720585

Calls written directly in this body: `automations.push`, `automations.sort`, `this.listIds`, `this.readConfig`, `this.toRecord`.

SHA-256 of the source span: `35d6299d45fb5992b51bb8a37d334ccaf247ff61632be9c1031bcdd714236ee8`.

### evaluation:627936

Calls written directly in this body: `automations.push`, `automations.sort`, `this.listIds`, `this.readConfig`, `this.toRecord`.

SHA-256 of the source span: `35d6299d45fb5992b51bb8a37d334ccaf247ff61632be9c1031bcdd714236ee8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
