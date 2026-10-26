# `describeOriginToolError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-tool-error-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-tool-error-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585807-585826](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585807-L585826) | `FunctionDeclaration` | no | `error63, blockedAction, readPortalBaseUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585807-585826](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585807-L585826) | 7 | 0 | 0 | 3 | 0 | 0 |

### evaluation:585807

Calls written directly in this body: `describeOriginAccessBlocker`.

SHA-256 of the source span: `3310e58cf1fcd4e51365c9976acbe0104b5b59338e613d8ba197032359cdd29c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
