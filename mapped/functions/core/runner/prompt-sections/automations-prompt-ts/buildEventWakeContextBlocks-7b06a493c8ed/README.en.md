# `buildEventWakeContextBlocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/prompt-sections/automations-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/automations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528589-528591](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528589-L528591) | `FunctionDeclaration` | no | `events` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528589-528591](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528589-L528591) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528589

Calls written directly in this body: `events.map`.

SHA-256 of the source span: `7ab938a1ff4570ea2b16966f4cddf4d4f4c9fa54baad49a1499599116afd1d7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
