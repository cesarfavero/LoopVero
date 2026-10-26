# `createTurnAgentComposition/buildAgentForRun/resolveToolName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-agent-composition.ts` · [Module README](../../../../../modules/core/runner/turn-agent-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588494-588494](../../../../../../reference/runtime/sand-eval-runner.cjs#L588494-L588494) | `ArrowFunctionExpression` | no | `event, callId, outlineName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588494-588494](../../../../../../reference/runtime/sand-eval-runner.cjs#L588494-L588494) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:588494 uses an implicit arrow-function return.

### evaluation:588494

Calls written directly in this body: `host.toolCallIdentity.resolveModelToolName`.

SHA-256 of the source span: `d2f37f999e1f4f8ed6344b2ef6344101ed2ea715371f410de1f4a79b41e91639`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
