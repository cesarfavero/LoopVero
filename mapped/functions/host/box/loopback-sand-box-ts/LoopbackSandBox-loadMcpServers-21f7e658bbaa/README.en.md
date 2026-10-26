# `LoopbackSandBox.loadMcpServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679297-679301](../../../../../../reference/runtime/host-main.cjs#L679297-L679301) | `method` | yes | `ctx, configJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679297-679301](../../../../../../reference/runtime/host-main.cjs#L679297-L679301) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:679297

Calls written directly in this body: `createBoxTransport`, `loadBoxMcpServersViaTransport`, `this.primaryEndpoint`, `this.waitUntilReady`.

SHA-256 of the source span: `06a547985c5a2d75b12641958737dac72272da0564b446d1df137cff4b3b6a44`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
