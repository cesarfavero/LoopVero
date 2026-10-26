# `flattenMathSpans`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722100-722107](../../../../../../reference/runtime/host-main.cjs#L722100-L722107) | `FunctionDeclaration` | no | `input2` |
| [evaluation:540077-540084](../../../../../../reference/runtime/sand-eval-runner.cjs#L540077-L540084) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722100-722107](../../../../../../reference/runtime/host-main.cjs#L722100-L722107) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540077-540084](../../../../../../reference/runtime/sand-eval-runner.cjs#L540077-L540084) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:722100

Calls written directly in this body: `codeSpanRanges`, `fencedBlockRanges`, `input2.replace`.

SHA-256 of the source span: `66f2e72d2fa5933ea603c3db6b44f6d5a271e87aaf49f163aafc06f99cb70347`.

### evaluation:540077

Calls written directly in this body: `codeSpanRanges`, `fencedBlockRanges`, `input2.replace`.

SHA-256 of the source span: `66f2e72d2fa5933ea603c3db6b44f6d5a271e87aaf49f163aafc06f99cb70347`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
