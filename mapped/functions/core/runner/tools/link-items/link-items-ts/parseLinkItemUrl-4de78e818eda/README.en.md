# `parseLinkItemUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741065-741075](../../../../../../../../reference/runtime/host-main.cjs#L741065-L741075) | `FunctionDeclaration` | no | `url2` |
| [evaluation:482012-482022](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482012-L482022) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741065-741075](../../../../../../../../reference/runtime/host-main.cjs#L741065-L741075) | 2 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:482012-482022](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482012-L482022) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:741065

Calls written directly in this body: `new URL`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `cae0eeb993372d4cacd4d597c0564c829d3938701ee83d7a482147e980c970b3`.

### evaluation:482012

Calls written directly in this body: `new URL`.

Assignment or increment targets: `parsed`.

SHA-256 of the source span: `2ab6614f6f49b933b6116549293dca4473990af81fee74dc70306832b8e79dfa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
