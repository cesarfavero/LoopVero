# `_SandAgentRunner.constructor/notifyBackgroundWorkSettled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593125-593125](../../../../../../reference/runtime/sand-eval-runner.cjs#L593125-L593125) | `ArrowFunctionExpression` | no | `completion` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593125-593125](../../../../../../reference/runtime/sand-eval-runner.cjs#L593125-L593125) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:593125 uses an implicit arrow-function return.

### evaluation:593125

Calls written directly in this body: `this.subagents.notifyBackgroundWorkSettled`.

SHA-256 of the source span: `0ac02d1fca2d56ade6a91e54d3c8e9a1d44f4534ea4e089280cab368895e1d45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
