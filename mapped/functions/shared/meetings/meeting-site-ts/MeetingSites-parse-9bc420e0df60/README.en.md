# `_MeetingSites.parse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772463-772469](../../../../../../reference/runtime/host-main.cjs#L772463-L772469) | `method` | no | `raw` |
| [evaluation:571692-571698](../../../../../../reference/runtime/sand-eval-runner.cjs#L571692-L571698) | `method` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772463-772469](../../../../../../reference/runtime/host-main.cjs#L772463-L772469) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:571692-571698](../../../../../../reference/runtime/sand-eval-runner.cjs#L571692-L571698) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:772463

Calls written directly in this body: `site.parse`.

SHA-256 of the source span: `5e752f7fa5b5f553634043c11d4dcd9766c9bc99794b01f90f26c5b0fb96fa4c`.

### evaluation:571692

Calls written directly in this body: `site.parse`.

SHA-256 of the source span: `cd1a3733c4638cf2df075a0fceda3c0292e90708cac552e6dd27c9693ba99cfe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
