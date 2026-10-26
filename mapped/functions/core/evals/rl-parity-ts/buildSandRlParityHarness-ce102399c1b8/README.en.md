# `buildSandRlParityHarness`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/rl-parity.ts` · [Module README](../../../../../modules/core/evals/rl-parity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596198-596203](../../../../../../reference/runtime/sand-eval-runner.cjs#L596198-L596203) | `FunctionDeclaration` | no | `record4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596198-596203](../../../../../../reference/runtime/sand-eval-runner.cjs#L596198-L596203) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596198

Calls written directly in this body: `renderSandRlParitySystemPrompt`.

SHA-256 of the source span: `cad7682f6445ba3b9be5fc6bcb48575fab2f5903eccec1d7b45b9c85918fe6ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
