# `parseBrowserViewState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/browser/browser-tool-auto-review.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/browser-tool-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743403-743412](../../../../../../../../reference/runtime/host-main.cjs#L743403-L743412) | `FunctionDeclaration` | no | `stateJson` |
| [evaluation:516254-516263](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516254-L516263) | `FunctionDeclaration` | no | `stateJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743403-743412](../../../../../../../../reference/runtime/host-main.cjs#L743403-L743412) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:516254-516263](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516254-L516263) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:743403

Calls written directly in this body: `JSON.parse`, `browserViewStateSchema.safeParse`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `1f2b10a457650fbc81f7a964dad65e7baae23ef4fd22c09fbcef8c1c862fec24`.

### evaluation:516254

Calls written directly in this body: `JSON.parse`, `browserViewStateSchema.safeParse`.

Assignment or increment targets: `parsed`.

SHA-256 of the source span: `03e29c2fd1ee6fe3f7f5bf23d8ffa46080f20dbb9141b0e9d34c4c7a2dedd2e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
