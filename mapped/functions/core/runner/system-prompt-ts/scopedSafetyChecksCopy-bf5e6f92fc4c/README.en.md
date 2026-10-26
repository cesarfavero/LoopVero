# `scopedSafetyChecksCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532991-533004](../../../../../../reference/runtime/sand-eval-runner.cjs#L532991-L533004) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532991-533004](../../../../../../reference/runtime/sand-eval-runner.cjs#L532991-L533004) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:532991

Calls written directly in this body: `configuredCopyOr`.

SHA-256 of the source span: `90ffe8d5b1b1e7f87d5feb5b2aa4354ef9b0b99ab5f51d102fd9dc2552a85812`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
