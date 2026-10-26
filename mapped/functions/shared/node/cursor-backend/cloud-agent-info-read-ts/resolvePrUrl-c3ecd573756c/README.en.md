# `resolvePrUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-info-read.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-info-read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508416-508419](../../../../../../../reference/runtime/host-main.cjs#L508416-L508419) | `FunctionDeclaration` | no | `detailed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508416-508419](../../../../../../../reference/runtime/host-main.cjs#L508416-L508419) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508416

Calls written directly in this body: `groupPrs`, `threadsNewestFirst.find`.

SHA-256 of the source span: `2885aca95b971b60a72a11f3e87502e288149026cd0cd1b717967cf9cfecc7d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
