# `Walker.declarePattern`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749756-749796](../../../../../../../../reference/runtime/host-main.cjs#L749756-L749796) | `method` | no | `pattern, kind, scope, mutable` |
| [evaluation:522607-522647](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522607-L522647) | `method` | no | `pattern, kind, scope, mutable` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749756-749796](../../../../../../../../reference/runtime/host-main.cjs#L749756-L749796) | 14 | 2 | 0 | 4 | 0 | 0 |
| [evaluation:522607-522647](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522607-L522647) | 14 | 2 | 0 | 4 | 0 | 0 |

### host:749756

Calls written directly in this body: `DENIED_PROPERTY_NAMES.has`, `elementOf`, `fail2`, `isDataLike`, `propertyKeyName`, `scope.declare`, `this.declarePattern`, `this.expr`.

SHA-256 of the source span: `4fc38ef5bfc5b86e550ce7e578e9abaa3dde32c6c255e8f99406aaae37a94802`.

### evaluation:522607

Calls written directly in this body: `DENIED_PROPERTY_NAMES.has`, `elementOf`, `fail`, `isDataLike`, `propertyKeyName`, `scope.declare`, `this.declarePattern`, `this.expr`.

SHA-256 of the source span: `f2eb5e43f284ddc0ccaea0de91d03df2f7a5449f487a7e8ec89dca0f67f9b744`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
