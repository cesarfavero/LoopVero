# `logText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `shared/observability/telemetry-fields.ts` · [Module README](../../../../../modules/shared/observability/telemetry-fields-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:450902-450905](../../../../../../reference/runtime/host-main.cjs#L450902-L450905) | `FunctionDeclaration` | no | `value, cap` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:450902-450905](../../../../../../reference/runtime/host-main.cjs#L450902-L450905) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:450902

Calls written directly in this body: `isLogText`, `value.slice`.

SHA-256 of the source span: `74961fa28ee106677765245cdfa9ec949c702bfc2351c1160c14a2c814e1d3e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
