# `parseHostUpgradeMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-upgrade-marker.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-upgrade-marker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681410-681437](../../../../../../../reference/runtime/host-main.cjs#L681410-L681437) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681410-681437](../../../../../../../reference/runtime/host-main.cjs#L681410-L681437) | 3 | 0 | 0 | 4 | 0 | 1 |

### host:681410

Calls written directly in this body: `JSON.parse`, `isUnknownRecord2`, `num`, `str3`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `1bedc3f2c17fb68821839f9e5158e7ca1761932946c789ba11fc6ed4a26ac85b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
