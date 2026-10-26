# `start/reportRenditionFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/extension.ts` · [Module README](../../../../../../modules/host/extensions/attachments/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499179-499182](../../../../../../../reference/runtime/host-main.cjs#L499179-L499182) | `ArrowFunctionExpression` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499179-499182](../../../../../../../reference/runtime/host-main.cjs#L499179-L499182) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:499179 uses an implicit arrow-function return.

### host:499179

Calls written directly in this body: `context2.deps.telemetry.logs.reportHostLog`.

SHA-256 of the source span: `a746edd2bd0e5aee1ba593e27c77e56577b194a77250fb9309fec5d77e5400f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
