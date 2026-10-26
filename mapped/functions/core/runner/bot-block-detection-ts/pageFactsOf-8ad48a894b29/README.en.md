# `pageFactsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484429-484438](../../../../../../reference/runtime/sand-eval-runner.cjs#L484429-L484438) | `FunctionDeclaration` | no | `page` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484429-484438](../../../../../../reference/runtime/sand-eval-runner.cjs#L484429-L484438) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:484429

Calls written directly in this body: `.replace`, `URL.canParse`, `new URL`, `page.title.trim`, `url2.hostname.toLowerCase`.

SHA-256 of the source span: `89adaf94a373ffe6beab601637b75876705427cd474f7b97bf1f482387801523`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
