# `boundedPrefix`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722136-722139](../../../../../../reference/runtime/host-main.cjs#L722136-L722139) | `FunctionDeclaration` | no | `text3, maxChars` |
| [evaluation:540113-540116](../../../../../../reference/runtime/sand-eval-runner.cjs#L540113-L540116) | `FunctionDeclaration` | no | `text3, maxChars` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722136-722139](../../../../../../reference/runtime/host-main.cjs#L722136-L722139) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540113-540116](../../../../../../reference/runtime/sand-eval-runner.cjs#L540113-L540116) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:722136

Calls written directly in this body: `flatCopy`, `isHighSurrogate2`, `text3.charCodeAt`, `text3.slice`.

SHA-256 of the source span: `63f6f9b4701969173262f95c44be885b2c9c7589a95a80daeb8d83fb946e4a28`.

### evaluation:540113

Calls written directly in this body: `flatCopy`, `isHighSurrogate2`, `text3.charCodeAt`, `text3.slice`.

SHA-256 of the source span: `63f6f9b4701969173262f95c44be885b2c9c7589a95a80daeb8d83fb946e4a28`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
