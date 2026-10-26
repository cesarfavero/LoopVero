# `LoopbackSandBox.ensureWindow/loadMcpServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679348-679348](../../../../../../reference/runtime/host-main.cjs#L679348-L679348) | `ArrowFunctionExpression` | no | `loadCtx, configJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679348-679348](../../../../../../reference/runtime/host-main.cjs#L679348-L679348) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:679348 uses an implicit arrow-function return.

### host:679348

Calls written directly in this body: `createBoxTransport`, `loadBoxMcpServersViaTransport`.

SHA-256 of the source span: `48ddaea08fcdb3f1be0e7819d9fdda2822edfeaa10ea1d6d41e934584df81714`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
