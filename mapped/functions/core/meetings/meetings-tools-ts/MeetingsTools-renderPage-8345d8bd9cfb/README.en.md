# `_MeetingsTools.renderPage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773453-773458](../../../../../../reference/runtime/host-main.cjs#L773453-L773458) | `method` | no | `page, lines2` |
| [evaluation:572679-572684](../../../../../../reference/runtime/sand-eval-runner.cjs#L572679-L572684) | `method` | no | `page, lines2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773453-773458](../../../../../../reference/runtime/host-main.cjs#L773453-L773458) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:572679-572684](../../../../../../reference/runtime/sand-eval-runner.cjs#L572679-L572684) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:773453

Calls written directly in this body: `.join`, `MeetingPageCursor.encode`, `lines2.join`.

SHA-256 of the source span: `5fd1c9a36bc715ad49d240cf420e19d24efe643c28720a3a70ab3cf9b38c2e99`.

### evaluation:572679

Calls written directly in this body: `.join`, `MeetingPageCursor.encode`, `lines2.join`.

SHA-256 of the source span: `5fd1c9a36bc715ad49d240cf420e19d24efe643c28720a3a70ab3cf9b38c2e99`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
