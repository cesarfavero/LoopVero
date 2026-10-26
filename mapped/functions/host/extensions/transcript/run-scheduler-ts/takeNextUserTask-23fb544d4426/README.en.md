# `takeNextUserTask`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-scheduler.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739619-739623](../../../../../../../reference/runtime/host-main.cjs#L739619-L739623) | `FunctionDeclaration` | no | `pending` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739619-739623](../../../../../../../reference/runtime/host-main.cjs#L739619-L739623) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:739619

Calls written directly in this body: `pending.findIndex`, `pending.splice`.

SHA-256 of the source span: `b0e015781417fe0b64bbe333b1f03ab1c7ef74f3e9767ec2c7324d1706f2450d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
