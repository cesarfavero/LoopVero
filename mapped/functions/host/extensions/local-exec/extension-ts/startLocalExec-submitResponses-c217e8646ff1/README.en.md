# `startLocalExec/submitResponses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/local-exec/extension.ts` · [Module README](../../../../../../modules/host/extensions/local-exec/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682185-682185](../../../../../../../reference/runtime/host-main.cjs#L682185-L682185) | `ArrowFunctionExpression` | no | `batch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682185-682185](../../../../../../../reference/runtime/host-main.cjs#L682185-L682185) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:682185 uses an implicit arrow-function return.

### host:682185

Calls written directly in this body: `bridge.submitResponses`.

SHA-256 of the source span: `4c48b1a3d5e68a3ca75b58f6f1f025ef6216a45566929a0b35d9078128cb8ed5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
