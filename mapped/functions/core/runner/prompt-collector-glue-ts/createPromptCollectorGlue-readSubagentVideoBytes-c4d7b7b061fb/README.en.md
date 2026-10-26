# `createPromptCollectorGlue/readSubagentVideoBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533820-533834](../../../../../../reference/runtime/sand-eval-runner.cjs#L533820-L533834) | `FunctionDeclaration` | yes | `videoPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533820-533834](../../../../../../reference/runtime/sand-eval-runner.cjs#L533820-L533834) | 2 | 0 | 2 | 2 | 1 | 0 |

### evaluation:533820

Calls written directly in this body: `boxVideoReadFailureMessage`, `host.readVideoAttachmentBytes`, `host.resolveBoxId`, `new SandVideoAttachmentError`, `readBoxVideoAttachment`.

Explicit throw targets: `SandVideoAttachmentError`.

SHA-256 of the source span: `7bea023c25abb7059c346e4b4c1bcf709556f8b08a758ec401d0b5b0eea76ada`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
