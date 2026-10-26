# `buildUserMessageAddressNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532517-532520](../../../../../../reference/runtime/sand-eval-runner.cjs#L532517-L532520) | `FunctionDeclaration` | no | `messageId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532517-532520](../../../../../../reference/runtime/sand-eval-runner.cjs#L532517-L532520) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532517

Calls written directly in this body: `isOffRecordMessageId`, `messageId.trim`.

SHA-256 of the source span: `f2ceed6e0d1aa3d4050f1e9954f0fd01b9c56c09fd8da273f1cfbaea9d6ec0ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
