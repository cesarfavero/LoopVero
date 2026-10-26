# `cloneSharingStructuredContent2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/large-output-spill.ts` · [Module README](../../../../../modules/core/runner/large-output-spill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:515731-515747](../../../../../../reference/runtime/sand-eval-runner.cjs#L515731-L515747) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:515731-515747](../../../../../../reference/runtime/sand-eval-runner.cjs#L515731-L515747) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:515731

Calls written directly in this body: `result.clone`.

Assignment or increment targets: `copy.result.value.structuredContent`, `success2.structuredContent`.

SHA-256 of the source span: `b7531d2c99eefc2a087d6de86f9408a6d17b12051b07ef52727b9c229ccb183f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
