# `wrapDynamicInvocationToolWithTimeout`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554197-554285](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554197-L554285) | `FunctionDeclaration` | no | `{   tool,   dynamicToolRegistry,   isComputerUseSubagent,   subagentToolTimeoutMs,   registerPauseCancel,   observeDynamicToolCall,   unreachableToolError,   driveTranslatorToolTags }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554197-554285](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554197-L554285) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:554197

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `483d391098e3c4aef3503694026f1babddac9b4b5f97753b1d4cc2ed0255660b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
