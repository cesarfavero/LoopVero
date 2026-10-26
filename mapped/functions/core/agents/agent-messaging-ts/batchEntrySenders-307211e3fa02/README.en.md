# `batchEntrySenders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-messaging.ts` · [Module README](../../../../../modules/core/agents/agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479579-479585](../../../../../../reference/runtime/sand-eval-runner.cjs#L479579-L479585) | `FunctionDeclaration` | no | `lines2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479579-479585](../../../../../../reference/runtime/sand-eval-runner.cjs#L479579-L479585) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:479579

Calls written directly in this body: `lines2.flatMap`.

SHA-256 of the source span: `8a78ce64bf72d40a8d71acfa18fa997df4e4c7f1abf2fb62a487c30a7c2caee9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
