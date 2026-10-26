# `describeCardSurfaceOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/card-surfacing.ts` · [Module README](../../../../../../modules/core/runner/cards/card-surfacing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763903-763906](../../../../../../../reference/runtime/host-main.cjs#L763903-L763906) | `FunctionDeclaration` | no | `outcome` |
| [evaluation:557277-557280](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557277-L557280) | `FunctionDeclaration` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763903-763906](../../../../../../../reference/runtime/host-main.cjs#L763903-L763906) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557277-557280](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557277-L557280) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:763903

Calls written directly in this body: `surfaceDisplayName`, `surfaceLine`.

SHA-256 of the source span: `066e50cb2fa9d4ea26380ab02afbc9120eb42e7b4da4858cc09f3bb2336ffbe4`.

### evaluation:557277

Calls written directly in this body: `surfaceDisplayName`, `surfaceLine`.

SHA-256 of the source span: `066e50cb2fa9d4ea26380ab02afbc9120eb42e7b4da4858cc09f3bb2336ffbe4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
