# `_MeetingsTools.renderSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773153-773164](../../../../../../reference/runtime/host-main.cjs#L773153-L773164) | `method` | no | `row` |
| [evaluation:572379-572390](../../../../../../reference/runtime/sand-eval-runner.cjs#L572379-L572390) | `method` | no | `row` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773153-773164](../../../../../../reference/runtime/host-main.cjs#L773153-L773164) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:572379-572390](../../../../../../reference/runtime/sand-eval-runner.cjs#L572379-L572390) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:773153

Calls written directly in this body: `_MeetingsTools.formatTime`, `_MeetingsTools.renderRow`, `_MeetingsTools.summaryEmptyHint`.

SHA-256 of the source span: `a6f097a135c9c4f8e522cec6563765b588cbfcb82bb3263b0a1179a803b47afb`.

### evaluation:572379

Calls written directly in this body: `_MeetingsTools.formatTime`, `_MeetingsTools.renderRow`, `_MeetingsTools.summaryEmptyHint`.

SHA-256 of the source span: `a6f097a135c9c4f8e522cec6563765b588cbfcb82bb3263b0a1179a803b47afb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
