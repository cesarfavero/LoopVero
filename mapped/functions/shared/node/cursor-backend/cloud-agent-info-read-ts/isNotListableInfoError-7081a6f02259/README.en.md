# `isNotListableInfoError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-info-read.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-info-read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508385-508387](../../../../../../../reference/runtime/host-main.cjs#L508385-L508387) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508385-508387](../../../../../../../reference/runtime/host-main.cjs#L508385-L508387) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508385

Calls written directly in this body: `NOT_LISTABLE_INFO_CODES.has`.

SHA-256 of the source span: `99707d95bde2f365a7c5be1b32ea514571f3ec0a636aec36bdf7490bab7fc13e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
