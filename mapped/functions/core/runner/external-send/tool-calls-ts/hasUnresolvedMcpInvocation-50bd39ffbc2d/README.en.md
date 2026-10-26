# `hasUnresolvedMcpInvocation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/tool-calls.ts` · [Module README](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539094-539108](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539094-L539108) | `FunctionDeclaration` | no | `messages, resolveHost, skipToolCallIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539094-539108](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539094-L539108) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539094

Calls written directly in this body: `forEachToolCall`.

SHA-256 of the source span: `fc78d83d281dfdddae9475a6cb20431adbb19633beb67543e4bb5fedc1657ae4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
