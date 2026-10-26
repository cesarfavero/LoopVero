# `TrayManager.enforceCap/activityOf2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/trays-service.ts` · [Module README](../../../../../../modules/host/extensions/trays/trays-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784547-784547](../../../../../../../reference/runtime/host-main.cjs#L784547-L784547) | `ArrowFunctionExpression` | no | `tray` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784547-784547](../../../../../../../reference/runtime/host-main.cjs#L784547-L784547) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:784547 uses an implicit arrow-function return.

### host:784547

Calls written directly in this body: `this.activitySeqByTrayId.get`.

SHA-256 of the source span: `2d42e9d74ad9270a9d87b083c3c20965f2dfedc3447f75f7dbf67c7140c55982`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
