# `LoopbackSandBox.ensureWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679310-679354](../../../../../../reference/runtime/host-main.cjs#L679310-L679354) | `method` | yes | `ctx, agentId, windowIndex, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679310-679354](../../../../../../reference/runtime/host-main.cjs#L679310-L679354) | 3 | 0 | 6 | 3 | 0 | 0 |

### host:679310

Calls written directly in this body: `String`, `createWindowMcpHost`, `encodeURIComponent`, `isPrimaryWindowIndex`, `opts.beforeStart`, `primarySandBoxWindow`, `sandBoxWindowKey`, `this.createRemoteAccessor`, `this.ensureReady`, `this.pingBox`, `this.protectRemoteAccessor`, `this.reportWindowShells`, `this.runStartWindow`, `this.waitUntilReady`, `this.windowConnections.delete`, `this.windowConnections.get`, `this.windowConnections.set`.

Assignment or increment targets: `headers[computed]`.

SHA-256 of the source span: `64fe00bc8b5a6f70d62fdd192974f0b37bf0d9f207757ca58e39709d9ab8977e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
