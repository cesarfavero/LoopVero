# `parseVaultContactInput`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/vault-contact.ts` · [Module README](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724443-724481](../../../../../../../reference/runtime/host-main.cjs#L724443-L724481) | `FunctionDeclaration` | no | `input2` |
| [evaluation:549922-549960](../../../../../../../reference/runtime/sand-eval-runner.cjs#L549922-L549960) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724443-724481](../../../../../../../reference/runtime/host-main.cjs#L724443-L724481) | 12 | 1 | 0 | 10 | 0 | 0 |
| [evaluation:549922-549960](../../../../../../../reference/runtime/sand-eval-runner.cjs#L549922-L549960) | 12 | 1 | 0 | 10 | 0 | 0 |

### host:724443

Calls written directly in this body: `.find`, `EMAIL_PATTERN.test`, `PHONE_PATTERN.test`, `canonicalVaultCountryCode`, `hasVaultPostalAddress`, `input2.address[computed].trim`, `input2.email.trim`, `input2.label.trim`, `isVaultCountryCode`, `withoutLoneVaultCountry`.

Assignment or increment targets: `entered[computed]`.

SHA-256 of the source span: `d208f7b8ce9650792cbb3e8f7cc8f7ce518a75533165fce2a0fbadec2c6f81cb`.

### evaluation:549922

Calls written directly in this body: `.find`, `EMAIL_PATTERN.test`, `PHONE_PATTERN.test`, `canonicalVaultCountryCode`, `hasVaultPostalAddress`, `input2.address[computed].trim`, `input2.email.trim`, `input2.label.trim`, `isVaultCountryCode`, `withoutLoneVaultCountry`.

Assignment or increment targets: `entered[computed]`.

SHA-256 of the source span: `d208f7b8ce9650792cbb3e8f7cc8f7ce518a75533165fce2a0fbadec2c6f81cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
