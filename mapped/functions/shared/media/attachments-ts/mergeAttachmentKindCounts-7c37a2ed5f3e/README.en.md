# `mergeAttachmentKindCounts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/attachments.ts` · [Module README](../../../../../modules/shared/media/attachments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490334-490344](../../../../../../reference/runtime/host-main.cjs#L490334-L490344) | `FunctionDeclaration` | no | `kinds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490334-490344](../../../../../../reference/runtime/host-main.cjs#L490334-L490344) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:490334

Calls written directly in this body: `.map`, `kinds.filter`, `merged.get`, `merged.set`, `new Map`.

SHA-256 of the source span: `12e9a1fa91e21525e1042db6cae2d487af0e9f5860ead20abe4593238f2c8621`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
