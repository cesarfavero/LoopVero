# `coerceRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [Module README](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733266-733294](../../../../../../../reference/runtime/host-main.cjs#L733266-L733294) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733266-733294](../../../../../../../reference/runtime/host-main.cjs#L733266-L733294) | 9 | 0 | 0 | 8 | 0 | 0 |

### host:733266

Calls written directly in this body: `Number.isFinite`, `STATUSES.find`, `isUnknownRecord2`, `parseAgentId`.

SHA-256 of the source span: `ca2c2cabea601bf0cce3c45212791e3d036cc185751e1629bb2d776213951e7f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
