# `CredentialCoordinator.getFreshDirectory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-coordinator.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-coordinator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548391-548401](../../../../../../../reference/runtime/host-main.cjs#L548391-L548401) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548391-548401](../../../../../../../reference/runtime/host-main.cjs#L548391-L548401) | 2 | 0 | 1 | 1 | 0 | 1 |

### host:548391

Calls written directly in this body: `this.log`, `this.options.loadDirectory`, `this.setDirectory`.

SHA-256 of the source span: `8ecefb33a9697e1aea6e3da1e066540f00f22bf819244f5342c20cce7da23d62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
