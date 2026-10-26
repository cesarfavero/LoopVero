# `clampPositiveInt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/agent-activity.ts` · [Module README](../../../../../modules/core/ports/agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765358-765361](../../../../../../reference/runtime/host-main.cjs#L765358-L765361) | `FunctionDeclaration` | no | `value, fallback3, cap` |
| [evaluation:558725-558728](../../../../../../reference/runtime/sand-eval-runner.cjs#L558725-L558728) | `FunctionDeclaration` | no | `value, fallback2, cap` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765358-765361](../../../../../../reference/runtime/host-main.cjs#L765358-L765361) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558725-558728](../../../../../../reference/runtime/sand-eval-runner.cjs#L558725-L558728) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:765358

Calls written directly in this body: `Math.floor`, `Math.min`, `Number.isFinite`.

SHA-256 of the source span: `5c834a0a39c8d2cbd3e6e33f6ec5a14474d563ded37eb832c4febcea331b0848`.

### evaluation:558725

Calls written directly in this body: `Math.floor`, `Math.min`, `Number.isFinite`.

SHA-256 of the source span: `c20c23bc9944a4c32f527a8c0292d33444aa616dab857fd8f3ba2c96f3260939`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
