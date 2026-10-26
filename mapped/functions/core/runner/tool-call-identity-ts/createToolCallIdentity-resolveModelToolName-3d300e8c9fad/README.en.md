# `createToolCallIdentity/resolveModelToolName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-call-identity.ts` · [Module README](../../../../../modules/core/runner/tool-call-identity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553804-553811](../../../../../../reference/runtime/sand-eval-runner.cjs#L553804-L553811) | `FunctionDeclaration` | no | `event, callId, outlineName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553804-553811](../../../../../../reference/runtime/sand-eval-runner.cjs#L553804-L553811) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:553804

Calls written directly in this body: `modelToolNamesByCallId.delete`, `modelToolNamesByCallId.get`, `surfaceUnresolvedPendingByCallId.delete`.

SHA-256 of the source span: `6f963f7f52bbe0c0ca8ca2b9bb930aa286943e822986375fcef618b093aca9a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
