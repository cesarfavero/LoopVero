# `createSandMemoryStateTool/describeActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771723-771726](../../../../../../../../reference/runtime/host-main.cjs#L771723-L771726) | `ArrowFunctionExpression` | no | `args` |
| [evaluation:570956-570959](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570956-L570959) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771723-771726](../../../../../../../../reference/runtime/host-main.cjs#L771723-L771726) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570956-570959](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570956-L570959) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771723

Calls written directly in this body: `describeStateUpdate`, `memoryStateArgs`.

SHA-256 of the source span: `6b34251940b98e9b0c4a61c734ba1a5113649a8ea107e6038b0c5297f0e87d05`.

### evaluation:570956

Calls written directly in this body: `describeStateUpdate`, `memoryStateArgs`.

SHA-256 of the source span: `6b34251940b98e9b0c4a61c734ba1a5113649a8ea107e6038b0c5297f0e87d05`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
