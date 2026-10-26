# `_MeetingsTools.renderFind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773133-773143](../../../../../../reference/runtime/host-main.cjs#L773133-L773143) | `method` | no | `page, args, nowMs2 = Date.now()` |
| [evaluation:572359-572369](../../../../../../reference/runtime/sand-eval-runner.cjs#L572359-L572369) | `method` | no | `page, args, nowMs = Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773133-773143](../../../../../../reference/runtime/host-main.cjs#L773133-L773143) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:572359-572369](../../../../../../reference/runtime/sand-eval-runner.cjs#L572359-L572369) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:773133

Calls written directly in this body: `_MeetingsTools.emptyPage`, `_MeetingsTools.renderPage`, `rows.map`.

SHA-256 of the source span: `5fd5519a49c16997ef9823d51fc5540f2e1a7ee6634e42e882cc434101c663ef`.

### evaluation:572359

Calls written directly in this body: `_MeetingsTools.emptyPage`, `_MeetingsTools.renderPage`, `rows.map`.

SHA-256 of the source span: `c764b5bbe57af31b7d89208c7488b202fd8a0258f7a91cb653d38935f4d9add2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
