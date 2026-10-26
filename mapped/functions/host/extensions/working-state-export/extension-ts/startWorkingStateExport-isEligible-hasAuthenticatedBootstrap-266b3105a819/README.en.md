# `startWorkingStateExport/isEligible/hasAuthenticatedBootstrap`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/extension.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786118-786118](../../../../../../../reference/runtime/host-main.cjs#L786118-L786118) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786118-786118](../../../../../../../reference/runtime/host-main.cjs#L786118-L786118) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:786118 uses an implicit arrow-function return.

### host:786118

Calls written directly in this body: `context2.deps.experiments.hasAuthenticatedStatsigBootstrap`.

SHA-256 of the source span: `7b08c4f438492b3e35cd32c67540d295426c621799ab303d34bd8f0b10fb2fb7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
