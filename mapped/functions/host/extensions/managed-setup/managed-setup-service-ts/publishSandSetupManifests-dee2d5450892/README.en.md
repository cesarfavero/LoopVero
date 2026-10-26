# `publishSandSetupManifests`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683643-683651](../../../../../../../reference/runtime/host-main.cjs#L683643-L683651) | `FunctionDeclaration` | yes | `manifests, paths = defaultPaths` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683643-683651](../../../../../../../reference/runtime/host-main.cjs#L683643-L683651) | 0 | 1 | 4 | 0 | 0 | 0 |

### host:683643

Calls written directly in this body: `manifestPath`, `pruneUnreferencedManifests`, `sandSetupAssignment`, `validateManifests`, `writeJsonAtomic`.

SHA-256 of the source span: `ff8bd30805cf0745f957de4109187f995e6cd35bbd374b7d06e4662c879b7a09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
