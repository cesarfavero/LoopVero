# `BoxRemoteExecManager.createExecInstance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/box-remote-accessor.ts` · [Module README](../../../../../modules/host/box/box-remote-accessor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679028-679042](../../../../../../reference/runtime/host-main.cjs#L679028-L679042) | `method` | yes | `ctx, argsSerializer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679028-679042](../../../../../../reference/runtime/host-main.cjs#L679028-L679042) | 3 | 1 | 0 | 0 | 1 | 0 |

### host:679028

Calls written directly in this body: `argsSerializer`, `new Error`, `this.client.exec`.

Assignment or increment targets: `error64.stack`, `this.nextId`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `ed953ddf7aafe9b78808599ebd30cb7ee30fa72a9ca6eeb82310e9cb4161481f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
