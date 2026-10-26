# `refineJoinMeeting`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772986-772993](../../../../../../reference/runtime/host-main.cjs#L772986-L772993) | `FunctionDeclaration` | no | `args, ctx` |
| [evaluation:572212-572219](../../../../../../reference/runtime/sand-eval-runner.cjs#L572212-L572219) | `FunctionDeclaration` | no | `args, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772986-772993](../../../../../../reference/runtime/host-main.cjs#L772986-L772993) | 3 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:572212-572219](../../../../../../reference/runtime/sand-eval-runner.cjs#L572212-L572219) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:772986

Calls written directly in this body: `MeetingRepeatSpec.problemOf`, `fail3`, `repeatOf`.

SHA-256 of the source span: `1bd2212cf267d203b88b0ea16ba0da08d47b472e62801bcce9b226495e32ea48`.

### evaluation:572212

Calls written directly in this body: `MeetingRepeatSpec.problemOf`, `fail2`, `repeatOf`.

SHA-256 of the source span: `29f79c30f191c529c96fbf4c1742f40605edf96ba8a99cc7042e8b79ce22eb20`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
