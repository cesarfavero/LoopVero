# `createToolCallIdentity/stashSurfaceUnresolvedPending`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-call-identity.ts` · [Module README](../../../../../modules/core/runner/tool-call-identity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553785-553791](../../../../../../reference/runtime/sand-eval-runner.cjs#L553785-L553791) | `FunctionDeclaration` | no | `callId, update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553785-553791](../../../../../../reference/runtime/sand-eval-runner.cjs#L553785-L553791) | 2 | 0 | 0 | 0 | 0 | 0 |

### evaluation:553785

Calls written directly in this body: `.next`, `surfaceUnresolvedPendingByCallId.delete`, `surfaceUnresolvedPendingByCallId.keys`, `surfaceUnresolvedPendingByCallId.set`.

SHA-256 of the source span: `8fd1fbab8f2113391527f5c980d329b2e30b2a61908af919e735d2771ad54d27`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
