# `_MeetingChannel.notices`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-channel.ts` · [Module README](../../../../../modules/shared/meetings/meeting-channel-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772541-772556](../../../../../../reference/runtime/host-main.cjs#L772541-L772556) | `method` | no | `meeting, phase, nowMs2, instruction = null` |
| [evaluation:571767-571782](../../../../../../reference/runtime/sand-eval-runner.cjs#L571767-L571782) | `method` | no | `meeting, phase, nowMs, instruction = null` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772541-772556](../../../../../../reference/runtime/host-main.cjs#L772541-L772556) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571767-571782](../../../../../../reference/runtime/sand-eval-runner.cjs#L571767-L571782) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:772541

Calls written directly in this body: `_MeetingChannel.endedText`, `_MeetingChannel.startedText`.

SHA-256 of the source span: `7c7b3afca014d07608cb74bd260a44d0ab3d21d5a59ae95f016f8f39a1e272d1`.

### evaluation:571767

Calls written directly in this body: `_MeetingChannel.endedText`, `_MeetingChannel.startedText`.

SHA-256 of the source span: `3590eff31a6858de9aa234750ca09283e8df73639ce3577201006aa6b502346b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
