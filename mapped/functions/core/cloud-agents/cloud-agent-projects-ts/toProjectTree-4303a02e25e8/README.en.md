# `toProjectTree`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-projects.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-projects-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509013-509041](../../../../../../reference/runtime/host-main.cjs#L509013-L509041) | `FunctionDeclaration` | no | `subtree, readPortalBaseUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509013-509041](../../../../../../reference/runtime/host-main.cjs#L509013-L509041) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:509013

Calls written directly in this body: `.map`, `counts.get`, `counts.set`, `mapRunStatus`, `new Map`, `subtree.nodes.map`.

SHA-256 of the source span: `a598dd5481fc7294ac751478d07c554e5807e3d44bd5dce4ecc431c5103b2cf1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
