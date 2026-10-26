# `startAgentIdentity/listRemoteAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496708-496711](../../../../../../../reference/runtime/host-main.cjs#L496708-L496711) | `ArrowFunctionExpression` | yes | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496708-496711](../../../../../../../reference/runtime/host-main.cjs#L496708-L496711) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:496708

Calls written directly in this body: `Object.assign`, `client.listGrokBotAgents`.

SHA-256 of the source span: `b804966aaa7b8f3405d56489f07612eb99b8ce1a24bb3fca24449e95103626ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
