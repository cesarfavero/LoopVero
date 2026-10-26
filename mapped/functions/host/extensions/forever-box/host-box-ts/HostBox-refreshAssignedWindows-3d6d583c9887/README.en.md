# `HostBox.refreshAssignedWindows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/host-box.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680539-680541](../../../../../../../reference/runtime/host-main.cjs#L680539-L680541) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680539-680541](../../../../../../../reference/runtime/host-main.cjs#L680539-L680541) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:680539

Calls written directly in this body: `boxRefreshAssignedWindows`.

SHA-256 of the source span: `e8216d06a2a62d1c8d1af1a0a54159ee561b7afacd801271190df9a1137a8005`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
