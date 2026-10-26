# `expirePendingLocalToolPermissionAskEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/pending-card-sweeps.ts` · [Module README](../../../../../../modules/host/extensions/session/pending-card-sweeps-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719494-719496](../../../../../../../reference/runtime/host-main.cjs#L719494-L719496) | `FunctionDeclaration` | no | `db, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719494-719496](../../../../../../../reference/runtime/host-main.cjs#L719494-L719496) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719494

Calls written directly in this body: `expirePendingCardEntries`.

SHA-256 of the source span: `89db5c85911398354b45563b98d4a7f520d31743ef76f4c534fbd343f5624ad3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
