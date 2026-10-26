# `ManagedSetupService.start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683491-683503](../../../../../../../reference/runtime/host-main.cjs#L683491-L683503) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683491-683503](../../../../../../../reference/runtime/host-main.cjs#L683491-L683503) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:683491

Calls written directly in this body: `this.options.polling.start`.

Assignment or increment targets: `this.pollingHandle`.

SHA-256 of the source span: `1f7ec753c56f6609ed861f9fbfa41da101943a5337b60ccbbb5ee730fde540b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
