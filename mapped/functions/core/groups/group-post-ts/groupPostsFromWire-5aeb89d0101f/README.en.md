# `groupPostsFromWire`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-post.ts` · [Module README](../../../../../modules/core/groups/group-post-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708270-708278](../../../../../../reference/runtime/host-main.cjs#L708270-L708278) | `FunctionDeclaration` | no | `posts, texts, reportDegraded` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708270-708278](../../../../../../reference/runtime/host-main.cjs#L708270-L708278) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:708270

Calls written directly in this body: `posts.flatMap`, `texts.map`.

SHA-256 of the source span: `627635b5793c915ec6260d92da13019406f5c27fa40315cf276a4686e6d78341`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
