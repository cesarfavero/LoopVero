# `startAgentIdentity/setLocalAvatarBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496806-496806](../../../../../../../reference/runtime/host-main.cjs#L496806-L496806) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496806-496806](../../../../../../../reference/runtime/host-main.cjs#L496806-L496806) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:496806 uses an implicit arrow-function return.

### host:496806

Calls written directly in this body: `context2.deps.transcript.setAgentAvatarBytesIfVersion`.

SHA-256 of the source span: `7724a200ffdbb78bc04b6ed5e4d97f6c7c70bbe07bceecb17283e3900b615dab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
