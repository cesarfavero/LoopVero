# `resolvedPhotos`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/places/places-card-kind.ts` · [Module README](../../../../../../../modules/core/runner/tools/places/places-card-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768779-768788](../../../../../../../../reference/runtime/host-main.cjs#L768779-L768788) | `FunctionDeclaration` | yes | `ctx, port, places, clock` |
| [evaluation:564354-564363](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564354-L564363) | `FunctionDeclaration` | yes | `ctx, port, places, clock` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768779-768788](../../../../../../../../reference/runtime/host-main.cjs#L768779-L768788) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:564354-564363](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564354-L564363) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:768779

Calls written directly in this body: `budget.run`, `createDeadlinePolicy`, `places.flatMap`.

SHA-256 of the source span: `0fb9c45ff402fc1dd3221e38524ae55b70752dd96117a1a23d2746cd99979147`.

### evaluation:564354

Calls written directly in this body: `budget.run`, `createDeadlinePolicy`, `places.flatMap`.

SHA-256 of the source span: `0fb9c45ff402fc1dd3221e38524ae55b70752dd96117a1a23d2746cd99979147`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
