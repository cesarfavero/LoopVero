# `LoopbackSandBox.applyEnvironment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679252-679257](../../../../../../reference/runtime/host-main.cjs#L679252-L679257) | `method` | yes | `ctx, update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679252-679257](../../../../../../reference/runtime/host-main.cjs#L679252-L679257) | 0 | 0 | 3 | 0 | 0 | 0 |

### host:679252

Calls written directly in this body: `this.applyEnvironmentAt`, `this.applyEnvironmentToLiveForkWindows`, `this.primaryEndpoint`, `this.waitUntilReady`.

SHA-256 of the source span: `63ec17487874ca0641b380415fbc7b5a325d9091bd3c841bd4621eedef3fbb0c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
