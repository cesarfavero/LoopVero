# `SandBoxNotReadyError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/box.ts` · [Module README](../../../../../modules/core/ports/box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:475649-475660](../../../../../../reference/runtime/sand-eval-runner.cjs#L475649-L475660) | `method` | no | `errorKind, message, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:475649-475660](../../../../../../reference/runtime/sand-eval-runner.cjs#L475649-L475660) | 4 | 0 | 0 | 0 | 0 | 0 |

### evaluation:475649

Calls written directly in this body: `BOX_NOT_READY_KINDS_AN_IMMEDIATE_RETRY_DOES_NOT_FIX.has`, `boxNotReadyCauseOf`, `super`.

Assignment or increment targets: `this.errorKind`, `this.name`, `this.toolCallFailureDetail`, `this.toolCallTransientKind`.

SHA-256 of the source span: `4b934ffc75c73a9b71b8b6d6ca9feb3905ca95200844f62f02714da3fda6a3ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
