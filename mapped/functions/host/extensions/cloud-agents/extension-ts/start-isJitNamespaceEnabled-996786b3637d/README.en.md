# `start/isJitNamespaceEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/extension.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538638-538640](../../../../../../../reference/runtime/host-main.cjs#L538638-L538640) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538638-538640](../../../../../../../reference/runtime/host-main.cjs#L538638-L538640) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:538638 uses an implicit arrow-function return.

### host:538638

Calls written directly in this body: `experiments.checkFeatureGate`.

SHA-256 of the source span: `6029460b7d0f865232a1ac4c3480c89dc6189299572abf89e7ec0dafab56238b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
