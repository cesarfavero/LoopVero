# `codeRanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760697-760727](../../../../../../../reference/runtime/host-main.cjs#L760697-L760727) | `FunctionDeclaration` | no | `content` |
| [evaluation:551512-551542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551512-L551542) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760697-760727](../../../../../../../reference/runtime/host-main.cjs#L760697-L760727) | 6 | 3 | 0 | 1 | 0 | 0 |
| [evaluation:551512-551542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551512-L551542) | 6 | 3 | 0 | 1 | 0 | 0 |

### host:760697

Calls written directly in this body: `.matchAll`, `FENCE_LINE.exec`, `content.slice`, `content.split`, `fences.push`, `info2.trim`, `isFenceOpener`, `ranges.push`.

Assignment or increment targets: `lineStart`, `open13`, `proseStart`.

SHA-256 of the source span: `45fb1c57b2fc0239962d511fb5f7096658f1b7df945138c9aa34792af1943f45`.

### evaluation:551512

Calls written directly in this body: `.matchAll`, `FENCE_LINE.exec`, `content.slice`, `content.split`, `fences.push`, `info2.trim`, `isFenceOpener`, `ranges.push`.

Assignment or increment targets: `lineStart`, `open4`, `proseStart`.

SHA-256 of the source span: `bfffe91f7f9ad03b1fdc465023619f798a91a59d85617b1463a4abe145e2e936`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
