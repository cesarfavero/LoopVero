# `withholdLoopingOutboundToolArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/outbound-message-loop.js` · [Module README](../../../../../modules/agent-engine/loop-detection/outbound-message-loop-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:436468-436489](../../../../../../reference/runtime/sand-eval-runner.cjs#L436468-L436489) | `FunctionDeclaration` | no | `ctx, policy, toolName, argsStream` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:436468-436489](../../../../../../reference/runtime/sand-eval-runner.cjs#L436468-L436489) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:436468

Calls written directly in this body: `getAgentLoopRuntime`, `policy.isOutboundMessageTool`.

SHA-256 of the source span: `ebd425cf604b37c857fce3664c76eaa1c69c0be87e7b3440aa0a1d22d958307b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
