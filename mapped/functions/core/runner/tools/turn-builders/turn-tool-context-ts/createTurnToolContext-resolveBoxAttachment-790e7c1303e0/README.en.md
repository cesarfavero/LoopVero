# `createTurnToolContext/resolveBoxAttachment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/turn-tool-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/turn-tool-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:569415-569423](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569415-L569423) | `ArrowFunctionExpression` | no | `ctx, boxPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569415-569423](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569415-L569423) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:569415 uses an implicit arrow-function return.

### evaluation:569415

Calls written directly in this body: `host.resolveBoxId`, `resolveBoxMediaAttachment`.

SHA-256 of the source span: `4632e970277aea45c55c09c3da014c21dae61833c076ccc1b152f35064e98c60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
