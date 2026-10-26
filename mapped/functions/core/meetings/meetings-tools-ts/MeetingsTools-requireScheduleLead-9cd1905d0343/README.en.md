# `_MeetingsTools.requireScheduleLead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773247-773258](../../../../../../reference/runtime/host-main.cjs#L773247-L773258) | `method` | no | `schedule, refuse2` |
| [evaluation:572473-572484](../../../../../../reference/runtime/sand-eval-runner.cjs#L572473-L572484) | `method` | no | `schedule, refuse3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773247-773258](../../../../../../reference/runtime/host-main.cjs#L773247-L773258) | 3 | 0 | 0 | 1 | 2 | 0 |
| [evaluation:572473-572484](../../../../../../reference/runtime/sand-eval-runner.cjs#L572473-L572484) | 3 | 0 | 0 | 1 | 2 | 0 |

### host:773247

Calls written directly in this body: `Date.now`, `new SandMeetingsError`, `refuse2`.

Explicit throw targets: `SandMeetingsError`.

SHA-256 of the source span: `88cba1515c99bf570518075521c3de04a7e02ae22fe29813b04cae634bcfd70b`.

### evaluation:572473

Calls written directly in this body: `Date.now`, `new SandMeetingsError`, `refuse3`.

Explicit throw targets: `SandMeetingsError`.

SHA-256 of the source span: `9378abe88d2487c917e0629e2ade658be61b6341e450760abbfbd999ed639d57`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
