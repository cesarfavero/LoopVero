# `_MeetingsTools.renderRow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773101-773119](../../../../../../reference/runtime/host-main.cjs#L773101-L773119) | `method` | no | `row, nowMs2 = Date.now()` |
| [evaluation:572327-572345](../../../../../../reference/runtime/sand-eval-runner.cjs#L572327-L572345) | `method` | no | `row, nowMs = Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773101-773119](../../../../../../reference/runtime/host-main.cjs#L773101-L773119) | 7 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572327-572345](../../../../../../reference/runtime/sand-eval-runner.cjs#L572327-L572345) | 7 | 0 | 0 | 1 | 0 | 0 |

### host:773101

Calls written directly in this body: `MeetingScheduleCopy.repeatDescription`, `_MeetingsTools.formatTime`, `_MeetingsTools.joiningIn`, `_MeetingsTools.providerSuffix`, `_MeetingsTools.titleSuffix`, `lines2.join`, `lines2.push`.

SHA-256 of the source span: `f6de036a72daffc8898eda3886370ffbf78a17716c7e2fc29fc6594d5ec239a3`.

### evaluation:572327

Calls written directly in this body: `MeetingScheduleCopy.repeatDescription`, `_MeetingsTools.formatTime`, `_MeetingsTools.joiningIn`, `_MeetingsTools.providerSuffix`, `_MeetingsTools.titleSuffix`, `lines2.join`, `lines2.push`.

SHA-256 of the source span: `92446a3964dd360943399b5b85209716bb6ff892ffd1bfb03ec65a9fbfebf9c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
