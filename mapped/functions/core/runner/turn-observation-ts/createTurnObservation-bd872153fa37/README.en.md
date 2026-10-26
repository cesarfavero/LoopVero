# `createTurnObservation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-observation.ts` · [Module README](../../../../../modules/core/runner/turn-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588575-588912](../../../../../../reference/runtime/sand-eval-runner.cjs#L588575-L588912) | `FunctionDeclaration` | no | `host, timing` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588575-588912](../../../../../../reference/runtime/sand-eval-runner.cjs#L588575-L588912) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588575

Calls written directly in this body: `createExpiryPolicy`, `new Map`, `new Set`.

SHA-256 of the source span: `72c47a966cdba7337ae8331dfd89ba8f111386d7ccc22ce1a49d98433e435d6a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
