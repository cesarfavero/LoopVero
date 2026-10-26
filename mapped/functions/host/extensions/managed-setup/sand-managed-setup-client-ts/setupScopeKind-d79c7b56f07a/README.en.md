# `setupScopeKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/sand-managed-setup-client.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/sand-managed-setup-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684101-684108](../../../../../../../reference/runtime/host-main.cjs#L684101-L684108) | `FunctionDeclaration` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684101-684108](../../../../../../../reference/runtime/host-main.cjs#L684101-L684108) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:684101

Calls written directly in this body: `new SandManagedSetupClientError`.

Explicit throw targets: `SandManagedSetupClientError`.

SHA-256 of the source span: `6a0a4512f5604243b64f66ef6b943cc7f19cfb8090c79e11611a217759935256`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
