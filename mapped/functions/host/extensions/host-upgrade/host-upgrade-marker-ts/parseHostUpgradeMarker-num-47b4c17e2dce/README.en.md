# `parseHostUpgradeMarker/num`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-upgrade-marker.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-upgrade-marker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681419-681419](../../../../../../../reference/runtime/host-main.cjs#L681419-L681419) | `ArrowFunctionExpression` | no | `x` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681419-681419](../../../../../../../reference/runtime/host-main.cjs#L681419-L681419) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:681419 uses an implicit arrow-function return.

### host:681419

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `07ed32a33c472fa838fd527316d06f3ca394627ed8e705a89673e51712895100`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
