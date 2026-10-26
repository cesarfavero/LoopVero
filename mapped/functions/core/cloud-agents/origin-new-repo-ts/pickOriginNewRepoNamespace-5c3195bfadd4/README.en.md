# `pickOriginNewRepoNamespace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-new-repo.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-new-repo-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513796-513810](../../../../../../reference/runtime/host-main.cjs#L513796-L513810) | `FunctionDeclaration` | no | `response` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513796-513810](../../../../../../reference/runtime/host-main.cjs#L513796-L513810) | 2 | 2 | 0 | 3 | 0 | 0 |

### host:513796

Calls written directly in this body: `BigInt`, `entry.namespace.namespace.trim`, `entry.namespace.ownerEntityId.toString`.

SHA-256 of the source span: `b4f676da8044bba7ecbf96cc924e69c20f89ba9b61c52708f13c1b2b76d662c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
