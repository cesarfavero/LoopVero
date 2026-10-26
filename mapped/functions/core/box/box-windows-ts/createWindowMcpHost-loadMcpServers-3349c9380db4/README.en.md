# `createWindowMcpHost/loadMcpServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554217-554230](../../../../../../reference/runtime/host-main.cjs#L554217-L554230) | `ArrowFunctionExpression` | yes | `ctx, configJson, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554217-554230](../../../../../../reference/runtime/host-main.cjs#L554217-L554230) | 2 | 0 | 2 | 2 | 1 | 1 |

### host:554217

Calls written directly in this body: `daemon.loadMcpServers`.

Assignment or increment targets: `pushed`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `f19b27102600fa3c23e47ef3eeec921a3cce3b8cb855bee3641e5b47bb71135f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
