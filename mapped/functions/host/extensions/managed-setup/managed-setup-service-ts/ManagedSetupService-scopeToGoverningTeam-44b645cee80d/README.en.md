# `ManagedSetupService.scopeToGoverningTeam`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683620-683641](../../../../../../../reference/runtime/host-main.cjs#L683620-L683641) | `method` | no | `fetched` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683620-683641](../../../../../../../reference/runtime/host-main.cjs#L683620-L683641) | 3 | 0 | 0 | 2 | 1 | 0 |

### host:683620

Calls written directly in this body: `fetched.manifests.filter`, `fetched.teamSecrets.filter`, `new SandManagedSetupError`, `this.log`.

Explicit throw targets: `SandManagedSetupError`.

SHA-256 of the source span: `c8c8e3d7a82124df8f4054d8c8eac6b20f7a9b8b638230824af8773c42244d39`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
