# `readRawSettings`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/settings-file.ts` · [Module README](../../../../../modules/host/agents/settings-file-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495006-495015](../../../../../../reference/runtime/host-main.cjs#L495006-L495015) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495006-495015](../../../../../../reference/runtime/host-main.cjs#L495006-L495015) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:495006

Calls written directly in this body: `parseRawSandSettings`, `readSandDataFileIfPresentSync`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `raw`.

SHA-256 of the source span: `9428fcc92b3c7c4468824f84cb817231894e7bc27c05f2dece3677e0ecf96392`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
