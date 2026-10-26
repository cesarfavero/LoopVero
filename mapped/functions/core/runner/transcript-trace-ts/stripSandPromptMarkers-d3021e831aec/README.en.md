# `stripSandPromptMarkers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/transcript-trace.ts` · [Module README](../../../../../modules/core/runner/transcript-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765651-765653](../../../../../../reference/runtime/host-main.cjs#L765651-L765653) | `FunctionDeclaration` | no | `text3` |
| [evaluation:559016-559018](../../../../../../reference/runtime/sand-eval-runner.cjs#L559016-L559018) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765651-765653](../../../../../../reference/runtime/host-main.cjs#L765651-L765653) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559016-559018](../../../../../../reference/runtime/sand-eval-runner.cjs#L559016-L559018) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765651

Calls written directly in this body: `stripLeadingHiddenPromptMarker`, `stripLeadingTrustedAutomationPromptMarker`.

SHA-256 of the source span: `60eb1982adb6010a08f4ac22829ed5de8a39da85032701db5ed9f150eebbcd5c`.

### evaluation:559016

Calls written directly in this body: `stripLeadingHiddenPromptMarker`, `stripLeadingTrustedAutomationPromptMarker`.

SHA-256 of the source span: `60eb1982adb6010a08f4ac22829ed5de8a39da85032701db5ed9f150eebbcd5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
