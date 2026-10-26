# `FileAutomationStore.setEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720647-720657](../../../../../../reference/runtime/host-main.cjs#L720647-L720657) | `method` | no | `id, isEnabled` |
| [evaluation:627998-628008](../../../../../../reference/runtime/sand-eval-runner.cjs#L627998-L628008) | `method` | no | `id, isEnabled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720647-720657](../../../../../../reference/runtime/host-main.cjs#L720647-L720657) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:627998-628008](../../../../../../reference/runtime/sand-eval-runner.cjs#L627998-L628008) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:720647

Calls written directly in this body: `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 of the source span: `21a070703977903f7668cf04b85d5d8c3d6618442f3514d8e809e823a1d93c00`.

### evaluation:627998

Calls written directly in this body: `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 of the source span: `21a070703977903f7668cf04b85d5d8c3d6618442f3514d8e809e823a1d93c00`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
