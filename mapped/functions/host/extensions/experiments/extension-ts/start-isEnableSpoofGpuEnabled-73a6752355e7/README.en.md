# `start/isEnableSpoofGpuEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/experiments/extension.ts` · [Module README](../../../../../../modules/host/extensions/experiments/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553596-553596](../../../../../../../reference/runtime/host-main.cjs#L553596-L553596) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553596-553596](../../../../../../../reference/runtime/host-main.cjs#L553596-L553596) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:553596 uses an implicit arrow-function return.

### host:553596

Calls written directly in this body: `service.checkFeatureGate`.

SHA-256 of the source span: `7ec221618e1f1f5eed296685333cbf399692c5ae0914534df1faf6f655408e67`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
