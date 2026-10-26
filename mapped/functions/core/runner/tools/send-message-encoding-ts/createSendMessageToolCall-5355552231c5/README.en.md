# `createSendMessageToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-encoding.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-encoding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759656-759663](../../../../../../../reference/runtime/host-main.cjs#L759656-L759663) | `FunctionDeclaration` | no | `toolCall2` |
| [evaluation:550260-550267](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550260-L550267) | `FunctionDeclaration` | no | `toolCall2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759656-759663](../../../../../../../reference/runtime/host-main.cjs#L759656-L759663) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550260-550267](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550260-L550267) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:759656

Calls written directly in this body: `new ToolCall`.

SHA-256 of the source span: `d4c443151664e338c2516dd14bf09777a5c7b206c050b7b521f43d8843e5d2b4`.

### evaluation:550260

Calls written directly in this body: `new ToolCall`.

SHA-256 of the source span: `d4c443151664e338c2516dd14bf09777a5c7b206c050b7b521f43d8843e5d2b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
