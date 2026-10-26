# `vaultContactPrefillOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/vault-contact.ts` · [Module README](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724560-724576](../../../../../../../reference/runtime/host-main.cjs#L724560-L724576) | `FunctionDeclaration` | no | `contact` |
| [evaluation:550039-550055](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550039-L550055) | `FunctionDeclaration` | no | `contact` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724560-724576](../../../../../../../reference/runtime/host-main.cjs#L724560-L724576) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550039-550055](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550039-L550055) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:724560

Calls written directly in this body: `mergeVaultContactPrefill`.

SHA-256 of the source span: `24b99d35f860fbba76bdc2aad14e8e047838d4bde371bea145757cd2b36c430a`.

### evaluation:550039

Calls written directly in this body: `mergeVaultContactPrefill`.

SHA-256 of the source span: `24b99d35f860fbba76bdc2aad14e8e047838d4bde371bea145757cd2b36c430a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
