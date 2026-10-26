# `buildSteerUserMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/steer/turn-steer.ts` · [Module README](../../../../../../modules/core/runner/steer/turn-steer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589768-589773](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589768-L589773) | `FunctionDeclaration` | no | `prompt, options2, isRenamedSpelling` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589768-589773](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589768-L589773) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:589768

Calls written directly in this body: `crypto.randomUUID`, `hiddenPromptMarker`, `new UserMessage`.

SHA-256 of the source span: `1393674a5879715347c7d3eb95cab8bf49feb2b1151c6bc84c8fed6f5aa286c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
