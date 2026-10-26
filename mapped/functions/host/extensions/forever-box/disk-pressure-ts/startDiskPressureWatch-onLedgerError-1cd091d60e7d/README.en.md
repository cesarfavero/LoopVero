# `startDiskPressureWatch/onLedgerError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/disk-pressure.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/disk-pressure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679968-679968](../../../../../../../reference/runtime/host-main.cjs#L679968-L679968) | `ArrowFunctionExpression` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679968-679968](../../../../../../../reference/runtime/host-main.cjs#L679968-L679968) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:679968 uses an implicit arrow-function return.

### host:679968

Calls written directly in this body: `deps.log`, `errorLogTag`.

SHA-256 of the source span: `7a24c817aa01a33c6971270042f99ec297a2b8ca292c15cd76d1db3d8b52034e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
