# `startWorkingStateExport/readWarmingConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/extension.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786063-786065](../../../../../../../reference/runtime/host-main.cjs#L786063-L786065) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786063-786065](../../../../../../../reference/runtime/host-main.cjs#L786063-L786065) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:786063 uses an implicit arrow-function return.

### host:786063

Calls written directly in this body: `context2.deps.experiments.getDynamicConfig`.

SHA-256 of the source span: `b55f19f505ff15d07fc6a6b66d6daf5a8fe4c4864f4415f08ec1aa34871904bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
