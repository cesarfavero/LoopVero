# `setAgentAvatarBytes/agentHasMemory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-mutations.ts` · [Module README](../../../../../../modules/host/extensions/session/session-mutations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722759-722759](../../../../../../../reference/runtime/host-main.cjs#L722759-L722759) | `ArrowFunctionExpression` | no | `candidate` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722759-722759](../../../../../../../reference/runtime/host-main.cjs#L722759-L722759) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:722759 uses an implicit arrow-function return.

### host:722759

Calls written directly in this body: `host.memory.agentHasContent`.

SHA-256 of the source span: `95e7e8ec5b373f6e4bc67cbe57dd6738bc076d7030b9f556be1caf37258d63ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
