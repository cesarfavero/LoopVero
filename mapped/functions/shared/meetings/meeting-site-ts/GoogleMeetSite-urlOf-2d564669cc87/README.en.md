# `_GoogleMeetSite.urlOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772276-772279](../../../../../../reference/runtime/host-main.cjs#L772276-L772279) | `method` | no | `code` |
| [evaluation:571505-571508](../../../../../../reference/runtime/sand-eval-runner.cjs#L571505-L571508) | `method` | no | `code` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772276-772279](../../../../../../reference/runtime/host-main.cjs#L772276-L772279) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571505-571508](../../../../../../reference/runtime/sand-eval-runner.cjs#L571505-L571508) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:772276

Calls written directly in this body: `code.toLowerCase`.

SHA-256 of the source span: `7e6edcb761838e7294bbe4f8d01b092a652c1523a82f8fdd5df69caf840b88aa`.

### evaluation:571505

Calls written directly in this body: `code.toLowerCase`.

SHA-256 of the source span: `7e6edcb761838e7294bbe4f8d01b092a652c1523a82f8fdd5df69caf840b88aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
