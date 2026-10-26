# `IdleDestroyingHttpAgent.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/idle-destroying-agent.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/idle-destroying-agent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714132-714135](../../../../../../../reference/runtime/host-main.cjs#L714132-L714135) | `method` | no | `idleMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714132-714135](../../../../../../../reference/runtime/host-main.cjs#L714132-L714135) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:714132

Calls written directly in this body: `super`.

Assignment or increment targets: `this.idleMs`.

SHA-256 of the source span: `ac2f62b2703f3192fe5d34898429d0515e62b0441e71eabfbb67c19318d19dec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
