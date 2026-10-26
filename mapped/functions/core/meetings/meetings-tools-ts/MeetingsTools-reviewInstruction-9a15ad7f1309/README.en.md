# `_MeetingsTools.reviewInstruction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773334-773348](../../../../../../reference/runtime/host-main.cjs#L773334-L773348) | `method` | yes | `deps, { meeting, instruction }` |
| [evaluation:572560-572574](../../../../../../reference/runtime/sand-eval-runner.cjs#L572560-L572574) | `method` | yes | `deps, { meeting, instruction }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773334-773348](../../../../../../reference/runtime/host-main.cjs#L773334-L773348) | 4 | 0 | 1 | 3 | 1 | 0 |
| [evaluation:572560-572574](../../../../../../reference/runtime/sand-eval-runner.cjs#L572560-L572574) | 4 | 0 | 1 | 3 | 1 | 0 |

### host:773334

Calls written directly in this body: `deps.reviewInstruction`, `deps.writesInstructions`, `new SandMeetingsError`, `reviewCallId`.

Explicit throw targets: `SandMeetingsError`.

SHA-256 of the source span: `4c60d9ec19b2845e51c1c80358cfd91ef892ba8ad8d29ccd5c5be615d25a15ae`.

### evaluation:572560

Calls written directly in this body: `deps.reviewInstruction`, `deps.writesInstructions`, `new SandMeetingsError`, `reviewCallId`.

Explicit throw targets: `SandMeetingsError`.

SHA-256 of the source span: `4c60d9ec19b2845e51c1c80358cfd91ef892ba8ad8d29ccd5c5be615d25a15ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
