# `SharedDesktopSandBox.inAgentQueue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554923-554936](../../../../../../reference/runtime/host-main.cjs#L554923-L554936) | `method` | yes | `ctx, agentId, work` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554923-554936](../../../../../../reference/runtime/host-main.cjs#L554923-L554936) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:554923

Calls written directly in this body: `Promise.resolve`, `Promise.withResolvers`, `earlier.then`, `this.agentEnsures.get`, `this.agentEnsures.set`, `turn.promise.then`, `untilCanceled`, `work`.

SHA-256 of the source span: `1662918fca8a82163d51cfe117416b8664348533de0f568ab8b3079d08b0dfe3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
