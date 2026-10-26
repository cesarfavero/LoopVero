# `destroyOnIdle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/idle-destroying-agent.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/idle-destroying-agent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714123-714130](../../../../../../../reference/runtime/host-main.cjs#L714123-L714130) | `FunctionDeclaration` | no | `socket, idleMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714123-714130](../../../../../../../reference/runtime/host-main.cjs#L714123-L714130) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714123

Calls written directly in this body: `socket.on`.

SHA-256 of the source span: `1404fc49f44929f6b4e025bff1f6e4d66e8018c194196128b2a32025ea995ad6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
