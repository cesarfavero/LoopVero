# `start/isSkipInaccessibleEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/extension.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506410-506412](../../../../../../../reference/runtime/host-main.cjs#L506410-L506412) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506410-506412](../../../../../../../reference/runtime/host-main.cjs#L506410-L506412) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:506410 uses an implicit arrow-function return.

### host:506410

Calls written directly in this body: `context2.deps.experiments.checkFeatureGate`.

SHA-256 of the source span: `f14734495c3a4a7fe46e344c7112676a83c98c7013b36de5ddb80a45d4ab50d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
