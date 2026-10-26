# `vaultContactFormFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/vault-contact.ts` · [Module README](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724540-724545](../../../../../../../reference/runtime/host-main.cjs#L724540-L724545) | `FunctionDeclaration` | no | `prefill = {}` |
| [evaluation:550019-550024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550019-L550024) | `FunctionDeclaration` | no | `prefill = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724540-724545](../../../../../../../reference/runtime/host-main.cjs#L724540-L724545) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550019-550024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550019-L550024) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724540

Calls written directly in this body: `CONTACT_FORM_FIELDS.map`.

SHA-256 of the source span: `4cf337974302ed81f6bf8c491df6e3088eb6a9d2bb507afbb5943cd93b51a576`.

### evaluation:550019

Calls written directly in this body: `CONTACT_FORM_FIELDS.map`.

SHA-256 of the source span: `4cf337974302ed81f6bf8c491df6e3088eb6a9d2bb507afbb5943cd93b51a576`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
