# `start/isCustomModeEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/extension.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538641-538641](../../../../../../../reference/runtime/host-main.cjs#L538641-L538641) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538641-538641](../../../../../../../reference/runtime/host-main.cjs#L538641-L538641) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:538641 uses an implicit arrow-function return.

### host:538641

Calls written directly in this body: `experiments.checkFeatureGate`.

SHA-256 of the source span: `bd083c5932a9c246b4672e5434e741015675793af563d5e71b9e0349cc0ffffa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
