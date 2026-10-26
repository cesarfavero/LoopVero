# `isProviderContentPolicyBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736241-736243](../../../../../../reference/runtime/host-main.cjs#L736241-L736243) | `FunctionDeclaration` | no | `error64` |
| [evaluation:589922-589924](../../../../../../reference/runtime/sand-eval-runner.cjs#L589922-L589924) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736241-736243](../../../../../../reference/runtime/host-main.cjs#L736241-L736243) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589922-589924](../../../../../../reference/runtime/sand-eval-runner.cjs#L589922-L589924) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736241

Calls written directly in this body: `hasProviderContentPolicyBlock`, `new Set`.

SHA-256 of the source span: `a3e6fe916cdb739f4f29c238ae03ffa3d6d087d97b6c7bf1cbdbb51023d9a640`.

### evaluation:589922

Calls written directly in this body: `hasProviderContentPolicyBlock`, `new Set`.

SHA-256 of the source span: `39730c41cdf5c202be2699f1fc31d5d21921b5f5ede64d934ea59b1eb4df2c02`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
