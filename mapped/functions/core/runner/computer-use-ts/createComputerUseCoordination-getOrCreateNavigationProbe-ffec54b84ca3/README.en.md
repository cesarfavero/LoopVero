# `createComputerUseCoordination/getOrCreateNavigationProbe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/computer-use.ts` · [Module README](../../../../../modules/core/runner/computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525537-525548](../../../../../../reference/runtime/sand-eval-runner.cjs#L525537-L525548) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525537-525548](../../../../../../reference/runtime/sand-eval-runner.cjs#L525537-L525548) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:525537

Calls written directly in this body: `createSandNavigationProbe`, `deps.actionAuditor`, `deps.getConversationId`.

Assignment or increment targets: `navigationProbe`.

SHA-256 of the source span: `cec019c68b5525a461d1c0d7bfc44523aa59573bc2ba64a0d3b6886d1ce5e594`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
