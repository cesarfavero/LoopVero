# `createLocalBrainDocsFs/readTree`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/local-brain-docs-fs.ts` · [Module README](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784760-784764](../../../../../../reference/runtime/host-main.cjs#L784760-L784764) | `FunctionExpression` | yes | `roots` |
| [evaluation:630157-630161](../../../../../../reference/runtime/sand-eval-runner.cjs#L630157-L630161) | `FunctionExpression` | yes | `roots` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784760-784764](../../../../../../reference/runtime/host-main.cjs#L784760-L784764) | 0 | 1 | 1 | 1 | 0 | 0 |
| [evaluation:630157-630161](../../../../../../reference/runtime/sand-eval-runner.cjs#L630157-L630161) | 0 | 1 | 1 | 1 | 0 | 0 |

### host:784760

Calls written directly in this body: `collect`, `new Map`.

SHA-256 of the source span: `d22b1ce99b3a4bff023f11bd7a9e9767b26f3868d6f576d15b62a8db992db886`.

### evaluation:630157

Calls written directly in this body: `collect`, `new Map`.

SHA-256 of the source span: `d22b1ce99b3a4bff023f11bd7a9e9767b26f3868d6f576d15b62a8db992db886`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
