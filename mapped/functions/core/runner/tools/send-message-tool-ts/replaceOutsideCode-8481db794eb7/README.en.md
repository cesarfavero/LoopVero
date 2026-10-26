# `replaceOutsideCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760728-760734](../../../../../../../reference/runtime/host-main.cjs#L760728-L760734) | `FunctionDeclaration` | no | `content, pattern, replace` |
| [evaluation:551543-551549](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551543-L551549) | `FunctionDeclaration` | no | `content, pattern, replace` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760728-760734](../../../../../../../reference/runtime/host-main.cjs#L760728-L760734) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551543-551549](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551543-L551549) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:760728

Calls written directly in this body: `codeRanges`, `content.replace`.

SHA-256 of the source span: `53e5302d117f32cdf057a4ed4ae0a94c512f6bb427913cd66d8c0ac004254e8e`.

### evaluation:551543

Calls written directly in this body: `codeRanges`, `content.replace`.

SHA-256 of the source span: `53e5302d117f32cdf057a4ed4ae0a94c512f6bb427913cd66d8c0ac004254e8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
