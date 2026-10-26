# `pruneUnreferencedManifests`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683669-683695](../../../../../../../reference/runtime/host-main.cjs#L683669-L683695) | `FunctionDeclaration` | yes | `manifestsRoot, manifests` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683669-683695](../../../../../../../reference/runtime/host-main.cjs#L683669-L683695) | 2 | 5 | 6 | 0 | 0 | 0 |

### host:683669

Calls written directly in this body: `.join`, `keptRevisionByIdentity.get`, `keptRevisionByIdentity.set`, `new Map`, `readdirOrEmpty`.

SHA-256 of the source span: `f667e2c8ab54a1f7eebbda003cacf6643f5b8d153accd758e54705e4a52dea15`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
