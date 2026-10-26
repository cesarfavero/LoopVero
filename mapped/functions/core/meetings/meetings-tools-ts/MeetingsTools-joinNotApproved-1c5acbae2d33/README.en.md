# `_MeetingsTools.joinNotApproved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773244-773246](../../../../../../reference/runtime/host-main.cjs#L773244-L773246) | `method` | no | `reason, answered` |
| [evaluation:572470-572472](../../../../../../reference/runtime/sand-eval-runner.cjs#L572470-L572472) | `method` | no | `reason, answered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773244-773246](../../../../../../reference/runtime/host-main.cjs#L773244-L773246) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572470-572472](../../../../../../reference/runtime/sand-eval-runner.cjs#L572470-L572472) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773244

Calls written directly in this body: `_MeetingsTools.answeredNote`.

SHA-256 of the source span: `dcd19f82cca93ded5523a38c7ed092b4dad2c77b31cb3f41dbf53c78adb31617`.

### evaluation:572470

Calls written directly in this body: `_MeetingsTools.answeredNote`.

SHA-256 of the source span: `dcd19f82cca93ded5523a38c7ed092b4dad2c77b31cb3f41dbf53c78adb31617`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
