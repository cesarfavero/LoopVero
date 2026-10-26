# `presentArguments`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/sand-read-transcript-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766391-766397](../../../../../../../reference/runtime/host-main.cjs#L766391-L766397) | `FunctionDeclaration` | no | `args` |
| [evaluation:559755-559761](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559755-L559761) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766391-766397](../../../../../../../reference/runtime/host-main.cjs#L766391-L766397) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559755-559761](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559755-L559761) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:766391

Calls written directly in this body: `.filter`, `Object.entries`, `Object.fromEntries`.

SHA-256 of the source span: `65b61c15f4c7efec4f944c6949753030c853dcaeabdd278b02134888077a4bc6`.

### evaluation:559755

Calls written directly in this body: `.filter`, `Object.entries`, `Object.fromEntries`.

SHA-256 of the source span: `65b61c15f4c7efec4f944c6949753030c853dcaeabdd278b02134888077a4bc6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
