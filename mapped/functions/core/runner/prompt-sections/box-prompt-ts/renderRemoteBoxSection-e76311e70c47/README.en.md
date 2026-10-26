# `renderRemoteBoxSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/box-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/box-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529007-529038](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529007-L529038) | `FunctionDeclaration` | no | `host, canUseUserComputer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529007-529038](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529007-L529038) | 6 | 0 | 0 | 2 | 0 | 0 |

### evaluation:529007

Calls written directly in this body: `.join`, `offersShellUserComputer`, `renderComputerUseRemoteBoxSection`.

Assignment or increment targets: `boxIntro`, `fileTransferLines`, `toolTargetLines`.

SHA-256 of the source span: `60f31566fb94b3452b75501fc94fb82bc0c55b5c9467f99ce74e78acec316b43`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
