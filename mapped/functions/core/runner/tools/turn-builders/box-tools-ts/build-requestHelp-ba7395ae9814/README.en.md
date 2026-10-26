# `build/requestHelp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779008-779008](../../../../../../../../reference/runtime/host-main.cjs#L779008-L779008) | `ArrowFunctionExpression` | no | `request5` |
| [evaluation:578742-578742](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578742-L578742) | `ArrowFunctionExpression` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779008-779008](../../../../../../../../reference/runtime/host-main.cjs#L779008-L779008) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:779008 uses an implicit arrow-function return.
| [evaluation:578742-578742](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578742-L578742) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:578742 uses an implicit arrow-function return.

### host:779008

Calls written directly in this body: `boxHandoff.requestHelp`.

SHA-256 of the source span: `84aa09619ea846c94f59117b601a303a54ee6d7b6b4da87628000b5ddc5c33d5`.

### evaluation:578742

Calls written directly in this body: `boxHandoff.requestHelp`.

SHA-256 of the source span: `c5832cc41f314473bacd7de02e41c7b07bd1f36047a67725ee22fd4cc4226bda`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
