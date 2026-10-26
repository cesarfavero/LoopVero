# `toolCallWrapper`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724962-724973](../../../../../../../reference/runtime/host-main.cjs#L724962-L724973) | `FunctionDeclaration` | no | `payload` |
| [evaluation:479933-479944](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479933-L479944) | `FunctionDeclaration` | no | `payload` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724962-724973](../../../../../../../reference/runtime/host-main.cjs#L724962-L724973) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479933-479944](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479933-L479944) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724962

Calls written directly in this body: `encodeSandStep`, `new CommunicateUpdateArgs`, `new CommunicateUpdateToolCall`, `new ToolCall`.

SHA-256 of the source span: `9c80cda0ff6572558080080a5008c7d78d9bb2c7c288f4e987ebee8faf2deb71`.

### evaluation:479933

Calls written directly in this body: `encodeSandStep`, `new CommunicateUpdateArgs`, `new CommunicateUpdateToolCall`, `new ToolCall`.

SHA-256 of the source span: `9c80cda0ff6572558080080a5008c7d78d9bb2c7c288f4e987ebee8faf2deb71`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
