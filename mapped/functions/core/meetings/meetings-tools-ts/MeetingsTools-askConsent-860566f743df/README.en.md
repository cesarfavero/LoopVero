# `_MeetingsTools.askConsent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773371-773379](../../../../../../reference/runtime/host-main.cjs#L773371-L773379) | `method` | yes | `deps` |
| [evaluation:572597-572605](../../../../../../reference/runtime/sand-eval-runner.cjs#L572597-L572605) | `method` | yes | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773371-773379](../../../../../../reference/runtime/host-main.cjs#L773371-L773379) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:572597-572605](../../../../../../reference/runtime/sand-eval-runner.cjs#L572597-L572605) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:773371

Calls written directly in this body: `deps.reviewJoin.askConsent`, `reviewCallId`.

SHA-256 of the source span: `249931d1a1772eac6dc7e39cd8ba7acd1fb393bbf502f0cfd85ad55b898ea008`.

### evaluation:572597

Calls written directly in this body: `deps.reviewJoin.askConsent`, `reviewCallId`.

SHA-256 of the source span: `249931d1a1772eac6dc7e39cd8ba7acd1fb393bbf502f0cfd85ad55b898ea008`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
