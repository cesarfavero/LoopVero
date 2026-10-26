# `ManagedSetupService.refresh`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683527-683576](../../../../../../../reference/runtime/host-main.cjs#L683527-L683576) | `method` | no | `force = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683527-683576](../../../../../../../reference/runtime/host-main.cjs#L683527-L683576) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:683527

Calls written directly in this body: `.finally`, `Promise.resolve`, `run`.

Assignment or increment targets: `this.refreshForceQueued`, `this.refreshInFlight`, `this.refreshQueued`.

SHA-256 of the source span: `837eb3cdaae0e05237e992a764271a3196b7b330c1e861029e8287ff0d83d357`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
