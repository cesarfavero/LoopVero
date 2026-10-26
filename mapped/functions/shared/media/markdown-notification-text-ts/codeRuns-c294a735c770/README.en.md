# `codeRuns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-notification-text.ts` · [Module README](../../../../../modules/shared/media/markdown-notification-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722218-722241](../../../../../../reference/runtime/host-main.cjs#L722218-L722241) | `FunctionDeclaration` | no | `source, cut` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722218-722241](../../../../../../reference/runtime/host-main.cjs#L722218-L722241) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:722218

Calls written directly in this body: `.filter`, `.map`, `.sort`, `codeSpanRanges`, `fencedBlockRanges`, `fences.map`, `indentedCodeRuns`, `monotonicRangeProbe`, `source.lastIndexOf`, `source.matchAll`.

SHA-256 of the source span: `522208931e82120efa31ba6d9beac99571169aee35012771b527f4b3749c841e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
