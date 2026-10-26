# `_MicrosoftTeamsSite.decoded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772434-772441](../../../../../../reference/runtime/host-main.cjs#L772434-L772441) | `method` | no | `part` |
| [evaluation:571663-571670](../../../../../../reference/runtime/sand-eval-runner.cjs#L571663-L571670) | `method` | no | `part` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772434-772441](../../../../../../reference/runtime/host-main.cjs#L772434-L772441) | 1 | 0 | 0 | 2 | 1 | 1 |
| [evaluation:571663-571670](../../../../../../reference/runtime/sand-eval-runner.cjs#L571663-L571670) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:772434

Calls written directly in this body: `decodeURIComponent`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `f6abf4983925cd35f91d75918b57fd91384a99e0d86783edc1305b58003780e6`.

### evaluation:571663

Calls written directly in this body: `decodeURIComponent`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `06d192fae96e926dc8afdad25f4383c082a8e1ef0b4ea65ea80a649c532a2af0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
