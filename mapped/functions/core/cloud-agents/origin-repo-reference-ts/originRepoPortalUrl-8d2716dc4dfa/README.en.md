# `originRepoPortalUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-repo-reference.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509141-509153](../../../../../../reference/runtime/host-main.cjs#L509141-L509153) | `FunctionDeclaration` | no | `repo, portalHostnames = ORIGIN_PORTAL_HOSTNAMES, readOriginPrIdentityHosts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509141-509153](../../../../../../reference/runtime/host-main.cjs#L509141-L509153) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:509141

Calls written directly in this body: `.hostname.toLowerCase`, `encodeURIComponent`, `originPrIdentityHostsFor`, `parseOriginPortalRepoPage`, `repoReferenceAsUrl`.

SHA-256 of the source span: `62f2c96675f1546fe28f0d598ea03945b6cba3fa26733374a3e1a989cb9ddc4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
