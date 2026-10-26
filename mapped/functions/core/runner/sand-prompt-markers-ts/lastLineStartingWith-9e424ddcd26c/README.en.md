# `lastLineStartingWith`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491186-491195](../../../../../../reference/runtime/host-main.cjs#L491186-L491195) | `FunctionDeclaration` | no | `text3, prefix` |
| [evaluation:526104-526113](../../../../../../reference/runtime/sand-eval-runner.cjs#L526104-L526113) | `FunctionDeclaration` | no | `text3, prefix` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491186-491195](../../../../../../reference/runtime/host-main.cjs#L491186-L491195) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:526104-526113](../../../../../../reference/runtime/sand-eval-runner.cjs#L526104-L526113) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:491186

Calls written directly in this body: `text3.indexOf`, `text3.startsWith`.

Assignment or increment targets: `found`, `lineStart`.

SHA-256 of the source span: `2a1bfdbed031364a78a6714fb2bdc3fd6b6d77ccf28304fa342130255ef3d214`.

### evaluation:526104

Calls written directly in this body: `text3.indexOf`, `text3.startsWith`.

Assignment or increment targets: `found`, `lineStart`.

SHA-256 of the source span: `2a1bfdbed031364a78a6714fb2bdc3fd6b6d77ccf28304fa342130255ef3d214`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
