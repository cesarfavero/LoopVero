# `_MeetingSites.orList`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772477-772479](../../../../../../reference/runtime/host-main.cjs#L772477-L772479) | `method` | no | `items` |
| [evaluation:571706-571708](../../../../../../reference/runtime/sand-eval-runner.cjs#L571706-L571708) | `method` | no | `items` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772477-772479](../../../../../../reference/runtime/host-main.cjs#L772477-L772479) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571706-571708](../../../../../../reference/runtime/sand-eval-runner.cjs#L571706-L571708) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:772477

Calls written directly in this body: `.format`, `new Intl.ListFormat`.

SHA-256 of the source span: `4db65b91a27d2a34642587bc442cd4d87c0fe3d672aa5c5ec0d980a5a2a01fa9`.

### evaluation:571706

Calls written directly in this body: `.format`, `new Intl.ListFormat`.

SHA-256 of the source span: `4db65b91a27d2a34642587bc442cd4d87c0fe3d672aa5c5ec0d980a5a2a01fa9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
