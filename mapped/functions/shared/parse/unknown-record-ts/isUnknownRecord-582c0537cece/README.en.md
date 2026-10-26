# `isUnknownRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/parse/unknown-record.ts` · [Module README](../../../../../modules/shared/parse/unknown-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:711-713](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L711-L713) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:711-713](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L711-L713) | 0 | 0 | 0 | 1 | 0 | 0 |

### state-worker:711

Calls written directly in this body: `Array.isArray`.

SHA-256 of the source span: `5c71b280b443bcd03fe9a09ca8de0626701d3f5316bdc20fc3c16001fc48c5b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
