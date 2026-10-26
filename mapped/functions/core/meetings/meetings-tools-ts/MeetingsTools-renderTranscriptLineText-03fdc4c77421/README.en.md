# `_MeetingsTools.renderTranscriptLineText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773518-773520](../../../../../../reference/runtime/host-main.cjs#L773518-L773520) | `method` | no | `text3` |
| [evaluation:572744-572746](../../../../../../reference/runtime/sand-eval-runner.cjs#L572744-L572746) | `method` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773518-773520](../../../../../../reference/runtime/host-main.cjs#L773518-L773520) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572744-572746](../../../../../../reference/runtime/sand-eval-runner.cjs#L572744-L572746) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:773518

Calls written directly in this body: `/^[^:]+: /.test`.

SHA-256 of the source span: `d19c914a73e58c65a3fc574a49839941918620b739bc297a2167cc79642a76a0`.

### evaluation:572744

Calls written directly in this body: `/^[^:]+: /.test`.

SHA-256 of the source span: `d19c914a73e58c65a3fc574a49839941918620b739bc297a2167cc79642a76a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
