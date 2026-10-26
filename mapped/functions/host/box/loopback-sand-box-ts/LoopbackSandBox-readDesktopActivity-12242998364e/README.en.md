# `LoopbackSandBox.readDesktopActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679394-679397](../../../../../../reference/runtime/host-main.cjs#L679394-L679397) | `method` | yes | `ctx, agentId, windowIndexes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679394-679397](../../../../../../reference/runtime/host-main.cjs#L679394-L679397) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:679394

Calls written directly in this body: `this.ensureReady`, `this.runReadDesktopActivity`.

SHA-256 of the source span: `174421827fbfbe82155e088a858aa2526238f63dd5fbc108d1390f3a40b8ced1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
