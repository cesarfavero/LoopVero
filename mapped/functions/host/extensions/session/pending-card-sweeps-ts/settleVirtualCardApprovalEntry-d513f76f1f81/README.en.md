# `settleVirtualCardApprovalEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/pending-card-sweeps.ts` · [Module README](../../../../../../modules/host/extensions/session/pending-card-sweeps-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719503-719515](../../../../../../../reference/runtime/host-main.cjs#L719503-L719515) | `FunctionDeclaration` | no | `db, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719503-719515](../../../../../../../reference/runtime/host-main.cjs#L719503-L719515) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:719503

Calls written directly in this body: `db.getTranscriptEntries`, `db.updateTranscriptEntry`, `settlePendingVirtualCardApprovalEntry`.

SHA-256 of the source span: `cb0e04299727642f0b155846b7bb1789f19119addbb6d1a9eb06c910e8e672b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
