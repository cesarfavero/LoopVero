# `_MeetingHosts.nameOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-host.ts` · [Module README](../../../../../modules/shared/meetings/meeting-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763191-763194](../../../../../../reference/runtime/host-main.cjs#L763191-L763194) | `method` | no | `url2` |
| [evaluation:556156-556159](../../../../../../reference/runtime/sand-eval-runner.cjs#L556156-L556159) | `method` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763191-763194](../../../../../../reference/runtime/host-main.cjs#L763191-L763194) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556156-556159](../../../../../../reference/runtime/sand-eval-runner.cjs#L556156-L556159) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:763191

Calls written directly in this body: `URL.canParse`, `_MeetingHosts.siteOf`, `new URL`.

SHA-256 of the source span: `bc30a970963a3dc7ce647195484b96c73dd64cde38729adae1170a12804e77aa`.

### evaluation:556156

Calls written directly in this body: `URL.canParse`, `_MeetingHosts.siteOf`, `new URL`.

SHA-256 of the source span: `bc30a970963a3dc7ce647195484b96c73dd64cde38729adae1170a12804e77aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
