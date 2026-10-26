# `originPortalHostnames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-repo-reference.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509130-509140](../../../../../../reference/runtime/host-main.cjs#L509130-L509140) | `FunctionDeclaration` | no | `readProductionPortalHostname, readOriginPrIdentityHosts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509130-509140](../../../../../../reference/runtime/host-main.cjs#L509130-L509140) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:509130

Calls written directly in this body: `originPrIdentityHostsFor`, `readProductionPortalHostname`.

SHA-256 of the source span: `5e51d9c4a27a8a4763743d43e25b1594ae78a100cc6426ebd9876c2d52e66709`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
