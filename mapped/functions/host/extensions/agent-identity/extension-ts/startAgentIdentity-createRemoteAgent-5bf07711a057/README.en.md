# `startAgentIdentity/createRemoteAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496712-496741](../../../../../../../reference/runtime/host-main.cjs#L496712-L496741) | `ArrowFunctionExpression` | yes | `req` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496712-496741](../../../../../../../reference/runtime/host-main.cjs#L496712-L496741) | 5 | 0 | 1 | 5 | 1 | 1 |

### host:496712

Calls written directly in this body: `client.createGrokBotAgent`, `createCallerKindOf`, `createIntentKindOf`, `harnessKindOf`, `invariant`, `isConnectCode`, `isServerAgentIdTakenRefusal`, `isServerBoxHarnessCreateRefusal`, `isServerTemporalHarnessRefusal`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `5a204b75306e94b3b73680cc542f5aa2f1f77e17a8c1ee6e44896118a51789cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
