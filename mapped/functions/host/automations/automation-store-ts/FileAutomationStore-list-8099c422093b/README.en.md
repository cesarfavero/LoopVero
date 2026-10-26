# `FileAutomationStore.list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720570-720584](../../../../../../reference/runtime/host-main.cjs#L720570-L720584) | `method` | no | `(none)` |
| [evaluation:627921-627935](../../../../../../reference/runtime/sand-eval-runner.cjs#L627921-L627935) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720570-720584](../../../../../../reference/runtime/host-main.cjs#L720570-L720584) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:627921-627935](../../../../../../reference/runtime/sand-eval-runner.cjs#L627921-L627935) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:720570

Calls written directly in this body: `automations.push`, `automations.sort`, `this.listIds`, `this.readConfig`, `this.toRecord`.

SHA-256 of the source span: `91137b247295c1a8a04c096c046b4e9a7a4cb902d574679113868903cbc70fa4`.

### evaluation:627921

Calls written directly in this body: `automations.push`, `automations.sort`, `this.listIds`, `this.readConfig`, `this.toRecord`.

SHA-256 of the source span: `91137b247295c1a8a04c096c046b4e9a7a4cb902d574679113868903cbc70fa4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
