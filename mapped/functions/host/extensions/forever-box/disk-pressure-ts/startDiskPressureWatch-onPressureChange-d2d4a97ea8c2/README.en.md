# `startDiskPressureWatch/onPressureChange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/disk-pressure.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/disk-pressure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679978-679981](../../../../../../../reference/runtime/host-main.cjs#L679978-L679981) | `ArrowFunctionExpression` | no | `next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679978-679981](../../../../../../../reference/runtime/host-main.cjs#L679978-L679981) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:679978

Calls written directly in this body: `listener`.

Assignment or increment targets: `level`.

SHA-256 of the source span: `34227a79436c1e6c0a77e1732a57427a79d9d495854eb831ed284456e9720823`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
