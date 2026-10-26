# `start/report`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/source-map/extension.ts` · [Module README](../../../../../../modules/host/extensions/source-map/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728833-728837](../../../../../../../reference/runtime/host-main.cjs#L728833-L728837) | `ArrowFunctionExpression` | no | `_event, errorClass` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728833-728837](../../../../../../../reference/runtime/host-main.cjs#L728833-L728837) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:728833 uses an implicit arrow-function return.

### host:728833

Calls written directly in this body: `reportHostDiagnostic`.

SHA-256 of the source span: `51237a0be05369e4fbfdaeb6de2c8df7e5fbb807152e643910ffb849a75f7eae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
