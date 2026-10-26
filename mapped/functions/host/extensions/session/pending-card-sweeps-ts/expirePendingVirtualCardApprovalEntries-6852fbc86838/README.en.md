# `expirePendingVirtualCardApprovalEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/pending-card-sweeps.ts` · [Module README](../../../../../../modules/host/extensions/session/pending-card-sweeps-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719500-719502](../../../../../../../reference/runtime/host-main.cjs#L719500-L719502) | `FunctionDeclaration` | no | `db, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719500-719502](../../../../../../../reference/runtime/host-main.cjs#L719500-L719502) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719500

Calls written directly in this body: `expirePendingCardEntries`.

SHA-256 of the source span: `a4f9aaf062365d4d23fe427fdc1dd5f30ad2b131cb1ef876d3f53adb83478dc0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
