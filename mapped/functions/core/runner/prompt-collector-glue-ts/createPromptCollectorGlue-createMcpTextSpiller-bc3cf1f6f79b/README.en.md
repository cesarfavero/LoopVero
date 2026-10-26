# `createPromptCollectorGlue/createMcpTextSpiller`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533811-533816](../../../../../../reference/runtime/sand-eval-runner.cjs#L533811-L533816) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533811-533816](../../../../../../reference/runtime/sand-eval-runner.cjs#L533811-L533816) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:533811

Calls written directly in this body: `createSandMcpTextSpiller`, `isLargeOutputSpillEnabled`.

SHA-256 of the source span: `95825d885b91ab1ca82079f857a2770d6fb215ff0188eca338b55c675f47532a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
