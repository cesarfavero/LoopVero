# `_MeetingSites.linksIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772471-772476](../../../../../../reference/runtime/host-main.cjs#L772471-L772476) | `method` | no | `text3` |
| [evaluation:571700-571705](../../../../../../reference/runtime/sand-eval-runner.cjs#L571700-L571705) | `method` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772471-772476](../../../../../../reference/runtime/host-main.cjs#L772471-L772476) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571700-571705](../../../../../../reference/runtime/sand-eval-runner.cjs#L571700-L571705) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:772471

Calls written directly in this body: `Array.from`, `text3.matchAll`.

SHA-256 of the source span: `3dfb9c9cfefe6c2c618f8f772706930af26a077308869dbe65566c5df62f9a37`.

### evaluation:571700

Calls written directly in this body: `Array.from`, `text3.matchAll`.

SHA-256 of the source span: `3dfb9c9cfefe6c2c618f8f772706930af26a077308869dbe65566c5df62f9a37`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
