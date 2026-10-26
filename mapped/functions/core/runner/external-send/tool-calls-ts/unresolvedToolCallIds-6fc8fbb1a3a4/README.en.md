# `unresolvedToolCallIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/tool-calls.ts` · [Module README](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539138-539151](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539138-L539151) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539138-539151](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539138-L539151) | 2 | 2 | 0 | 1 | 0 | 0 |

### evaluation:539138

Calls written directly in this body: `toolCallIds`, `unresolved.delete`.

SHA-256 of the source span: `60aedc08f0c41640547d49581b31350f004a933058ee7662e4ccce2bd18f210c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
