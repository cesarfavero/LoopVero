# `_MeetingsTools.renderTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773475-773496](../../../../../../reference/runtime/host-main.cjs#L773475-L773496) | `method` | no | `page, args` |
| [evaluation:572701-572722](../../../../../../reference/runtime/sand-eval-runner.cjs#L572701-L572722) | `method` | no | `page, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773475-773496](../../../../../../reference/runtime/host-main.cjs#L773475-L773496) | 6 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:572701-572722](../../../../../../reference/runtime/sand-eval-runner.cjs#L572701-L572722) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:773475

Calls written directly in this body: `.filter`, `.join`, `filters.join`, `page.lines.map`.

SHA-256 of the source span: `d25d60888d5efa555e5b47a454cdc47ee6ff9a0ba1bf8d890d78e9f83fc64417`.

### evaluation:572701

Calls written directly in this body: `.filter`, `.join`, `filters.join`, `page.lines.map`.

SHA-256 of the source span: `d25d60888d5efa555e5b47a454cdc47ee6ff9a0ba1bf8d890d78e9f83fc64417`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
