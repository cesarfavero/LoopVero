# `listOriginNamespaces`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-repo-listing.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-repo-listing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512297-512326](../../../../../../reference/runtime/host-main.cjs#L512297-L512326) | `FunctionDeclaration` | yes | `origin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512297-512326](../../../../../../reference/runtime/host-main.cjs#L512297-L512326) | 7 | 1 | 1 | 5 | 0 | 1 |

### host:512297

Calls written directly in this body: `BigInt`, `errorLogTag`, `namespaces.has`, `namespaces.set`, `namespaces.values`, `new GetAuthorizedNamespacesRequest`, `new Map`, `origin.getAuthorizedNamespaces`, `owned.namespace.trim`, `owned.ownerEntityId.toString`, `process.stderr.write`.

Assignment or increment targets: `response`.

SHA-256 of the source span: `f3cceff59d81a8ed1799c520ff82ecc0b5a8ff77ba5d8caab6f3755c86707ca4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
