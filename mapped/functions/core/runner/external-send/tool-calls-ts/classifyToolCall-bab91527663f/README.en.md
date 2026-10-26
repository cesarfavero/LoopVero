# `classifyToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/tool-calls.ts` · [Module README](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539051-539053](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539051-L539053) | `FunctionDeclaration` | no | `toolName, args, resolveHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539051-539053](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539051-L539053) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539051

Calls written directly in this body: `MCP_INVOCATION_TOOL_NAMES.has`, `classifyMcpInvocation`, `classifyProviderKeyedTool`.

SHA-256 of the source span: `02d9b8e9debdbee27dc8a23ccc1043f1dbe1093c249a3305d007763659ca1257`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
