# `ManagedSetupService.refreshManagedSetup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683513-683516](../../../../../../../reference/runtime/host-main.cjs#L683513-L683516) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683513-683516](../../../../../../../reference/runtime/host-main.cjs#L683513-L683516) | 1 | 0 | 1 | 0 | 1 | 0 |

### host:683513

Calls written directly in this body: `this.refresh`.

Explicit throw targets: `outcome.failure.error`.

SHA-256 of the source span: `b3c960566abf1e47458a56957c2b9c8a82d2a349a2761caa2355a9434e64c62a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
