# `LoopbackSandBox.reportWindowShells`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679355-679365](../../../../../../reference/runtime/host-main.cjs#L679355-L679365) | `method` | no | `ctx, window2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679355-679365](../../../../../../reference/runtime/host-main.cjs#L679355-L679365) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:679355

Calls written directly in this body: `reportBackgroundShells`.

SHA-256 of the source span: `bcdf2dc2c9128c83d3d7ac080dde4e021b80fc84bfa6a25243ba9bfe06bcdc4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
