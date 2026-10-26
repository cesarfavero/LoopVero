# `ManagedSetupService.converge`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683577-683611](../../../../../../../reference/runtime/host-main.cjs#L683577-L683611) | `method` | yes | `force, teamSecrets, manifests` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683577-683611](../../../../../../../reference/runtime/host-main.cjs#L683577-L683611) | 4 | 0 | 2 | 4 | 1 | 1 |

### host:683577

Calls written directly in this body: `.catch`, `Date.now`, `Math.min`, `errorLogTag`, `manifests.reduce`, `sandSetupAssignmentHash`, `this.launchConverge`, `this.readStatus`, `this.reportConverge`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `f10e3f2d39f8bd542daf539e37e3f6ae4579c73914121e3d3c1b18a60f6c7415`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
