# `_MeetingsTools.renderList`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773120-773132](../../../../../../reference/runtime/host-main.cjs#L773120-L773132) | `method` | no | `page, args, nowMs2 = Date.now()` |
| [evaluation:572346-572358](../../../../../../reference/runtime/sand-eval-runner.cjs#L572346-L572358) | `method` | no | `page, args, nowMs = Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773120-773132](../../../../../../reference/runtime/host-main.cjs#L773120-L773132) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:572346-572358](../../../../../../reference/runtime/sand-eval-runner.cjs#L572346-L572358) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:773120

Calls written directly in this body: `_MeetingsTools.emptyPage`, `_MeetingsTools.renderPage`, `rows.map`.

SHA-256 of the source span: `7f46d51434a4061112d3d15e188cf709d567722ccdcc0afeabbadbb50630d33f`.

### evaluation:572346

Calls written directly in this body: `_MeetingsTools.emptyPage`, `_MeetingsTools.renderPage`, `rows.map`.

SHA-256 of the source span: `ce2caa1a20dd432ea11ac8fee3f99af4a3263b99678eaa942eae8fe97b174f83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
