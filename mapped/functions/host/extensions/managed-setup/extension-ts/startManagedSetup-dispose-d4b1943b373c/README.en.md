# `startManagedSetup/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/extension.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684188-684192](../../../../../../../reference/runtime/host-main.cjs#L684188-L684192) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684188-684192](../../../../../../../reference/runtime/host-main.cjs#L684188-L684192) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:684188

Calls written directly in this body: `managedSkills.dispose`, `service.dispose`, `stopCredentialStartup`.

SHA-256 of the source span: `ba993fdf60e54f3d01fe21c4496ad215f5a7ee5d28b175fce0442b1e22b3d036`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
