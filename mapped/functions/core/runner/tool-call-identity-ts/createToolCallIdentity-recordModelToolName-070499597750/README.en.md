# `createToolCallIdentity/recordModelToolName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-call-identity.ts` · [Module README](../../../../../modules/core/runner/tool-call-identity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553792-553803](../../../../../../reference/runtime/sand-eval-runner.cjs#L553792-L553803) | `FunctionDeclaration` | no | `toolCallId, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553792-553803](../../../../../../reference/runtime/sand-eval-runner.cjs#L553792-L553803) | 3 | 0 | 0 | 0 | 0 | 0 |

### evaluation:553792

Calls written directly in this body: `.next`, `host.emitUpdate`, `modelToolNamesByCallId.delete`, `modelToolNamesByCallId.keys`, `modelToolNamesByCallId.set`, `surfaceUnresolvedPendingByCallId.delete`, `surfaceUnresolvedPendingByCallId.get`.

SHA-256 of the source span: `d3366c0a3e992a25c1044dd128f5c12df4ae74965011e6c4f8df4d075d289192`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
