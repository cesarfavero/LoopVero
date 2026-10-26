# `clip`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/transcript-search/transcript-search-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/transcript-search/transcript-search-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771352-771355](../../../../../../../../reference/runtime/host-main.cjs#L771352-L771355) | `FunctionDeclaration` | no | `text3, maxChars` |
| [evaluation:570586-570589](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570586-L570589) | `FunctionDeclaration` | no | `text3, maxChars` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771352-771355](../../../../../../../../reference/runtime/host-main.cjs#L771352-L771355) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570586-570589](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570586-L570589) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771352

Calls written directly in this body: `.join`, `Array.from`, `chars.slice`.

SHA-256 of the source span: `6f223b68155465b500f97a5e14dcb16c0b6c8affae37287d839b1d72fc3dfc52`.

### evaluation:570586

Calls written directly in this body: `.join`, `Array.from`, `chars.slice`.

SHA-256 of the source span: `6f223b68155465b500f97a5e14dcb16c0b6c8affae37287d839b1d72fc3dfc52`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
