# `withoutLoneVaultCountry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/vault-contact.ts` · [Module README](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724439-724442](../../../../../../../reference/runtime/host-main.cjs#L724439-L724442) | `FunctionDeclaration` | no | `address` |
| [evaluation:549918-549921](../../../../../../../reference/runtime/sand-eval-runner.cjs#L549918-L549921) | `FunctionDeclaration` | no | `address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724439-724442](../../../../../../../reference/runtime/host-main.cjs#L724439-L724442) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549918-549921](../../../../../../../reference/runtime/sand-eval-runner.cjs#L549918-L549921) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:724439

Calls written directly in this body: `hasVaultPostalAddress`.

SHA-256 of the source span: `37a0729aae369347c466172506c81e083ec149ab1cd6fabc040be84e67065864`.

### evaluation:549918

Calls written directly in this body: `hasVaultPostalAddress`.

SHA-256 of the source span: `37a0729aae369347c466172506c81e083ec149ab1cd6fabc040be84e67065864`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
