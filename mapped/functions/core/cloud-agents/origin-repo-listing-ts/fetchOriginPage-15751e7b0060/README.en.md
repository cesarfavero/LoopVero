# `fetchOriginPage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-repo-listing.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-repo-listing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512327-512348](../../../../../../reference/runtime/host-main.cjs#L512327-L512348) | `FunctionDeclaration` | yes | `origin, unit, request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512327-512348](../../../../../../reference/runtime/host-main.cjs#L512327-L512348) | 6 | 0 | 1 | 3 | 0 | 1 |

### host:512327

Calls written directly in this body: `errorLogTag`, `new ListHostedReposRequest`, `origin.listHostedRepos`, `process.stderr.write`.

SHA-256 of the source span: `488eeba833b25b9ba7148b66d4422ee4e28fd58627595f11454d31b35ef3249e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
