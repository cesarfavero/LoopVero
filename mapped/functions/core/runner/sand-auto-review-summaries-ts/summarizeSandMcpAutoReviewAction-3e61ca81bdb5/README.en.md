# `summarizeSandMcpAutoReviewAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693780-693786](../../../../../../reference/runtime/host-main.cjs#L693780-L693786) | `FunctionDeclaration` | no | `args` |
| [evaluation:491049-491055](../../../../../../reference/runtime/sand-eval-runner.cjs#L491049-L491055) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693780-693786](../../../../../../reference/runtime/host-main.cjs#L693780-L693786) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:491049-491055](../../../../../../reference/runtime/sand-eval-runner.cjs#L491049-L491055) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:693780

Calls written directly in this body: `JSON.stringify`, `compact`, `compactHeadAndTail`, `redactMcpValue`.

SHA-256 of the source span: `f25bc409a95299071514ada3d1ec5103be73c1f0b3102c048d024253b99a7e79`.

### evaluation:491049

Calls written directly in this body: `JSON.stringify`, `compact`, `compactHeadAndTail`, `redactMcpValue`.

SHA-256 of the source span: `f25bc409a95299071514ada3d1ec5103be73c1f0b3102c048d024253b99a7e79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
