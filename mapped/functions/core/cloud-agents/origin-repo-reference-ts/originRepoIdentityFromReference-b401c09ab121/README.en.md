# `originRepoIdentityFromReference`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-repo-reference.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509154-509166](../../../../../../reference/runtime/host-main.cjs#L509154-L509166) | `FunctionDeclaration` | no | `raw, readOriginPrIdentityHosts` |
| [evaluation:556879-556891](../../../../../../reference/runtime/sand-eval-runner.cjs#L556879-L556891) | `FunctionDeclaration` | no | `raw, readOriginPrIdentityHosts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509154-509166](../../../../../../reference/runtime/host-main.cjs#L509154-L509166) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:556879-556891](../../../../../../reference/runtime/sand-eval-runner.cjs#L556879-L556891) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:509154

Calls written directly in this body: `originPrIdentityHostsFor`, `parseOriginPortalRepoPage`, `parseOriginRepoCloneUrl`, `raw.trim`, `repoReferenceAsUrl`.

SHA-256 of the source span: `db73056c13eef1141925d8bd28252bdc3b933fd9af484769aa88d08ae16abaec`.

### evaluation:556879

Calls written directly in this body: `originPrIdentityHostsFor`, `parseOriginPortalRepoPage`, `parseOriginRepoCloneUrl`, `raw.trim`, `repoReferenceAsUrl`.

SHA-256 of the source span: `db73056c13eef1141925d8bd28252bdc3b933fd9af484769aa88d08ae16abaec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
