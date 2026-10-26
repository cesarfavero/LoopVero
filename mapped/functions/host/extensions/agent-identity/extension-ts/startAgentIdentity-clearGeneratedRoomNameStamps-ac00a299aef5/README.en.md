# `startAgentIdentity/clearGeneratedRoomNameStamps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496944-496949](../../../../../../../reference/runtime/host-main.cjs#L496944-L496949) | `ArrowFunctionExpression` | no | `rooms` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496944-496949](../../../../../../../reference/runtime/host-main.cjs#L496944-L496949) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:496944 uses an implicit arrow-function return.

### host:496944

Calls written directly in this body: `clearGeneratedRoomNameStamps`, `getSandAgentsRootDir`, `getSandRootDir`.

SHA-256 of the source span: `06802f80ead582ecf823c35bd2e54c07d6ca3ffc5e7dc3665b17b36793a8faea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
