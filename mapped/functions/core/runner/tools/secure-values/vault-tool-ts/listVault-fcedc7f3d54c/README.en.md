# `listVault`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767929-767943](../../../../../../../../reference/runtime/host-main.cjs#L767929-L767943) | `FunctionDeclaration` | yes | `deps, kind` |
| [evaluation:563445-563459](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563445-L563459) | `FunctionDeclaration` | yes | `deps, kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767929-767943](../../../../../../../../reference/runtime/host-main.cjs#L767929-L767943) | 7 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:563445-563459](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563445-L563459) | 7 | 0 | 2 | 1 | 0 | 0 |

### host:767929

Calls written directly in this body: `.join`, `Promise.all`, `cardsBlock`, `chatValueNames`, `chatValuesBlock`, `contactsBlock`, `loginsBlock`, `settingsOnly`, `values.listSavedCards`, `values.listSavedContacts`, `values.listSavedLoginSummaries`.

SHA-256 of the source span: `c4e275204471a5b40cedbd5790e76ecbe0b629add721f7b1fd51be6948437baa`.

### evaluation:563445

Calls written directly in this body: `.join`, `Promise.all`, `cardsBlock`, `chatValueNames`, `chatValuesBlock`, `contactsBlock`, `loginsBlock`, `settingsOnly`, `values.listSavedCards`, `values.listSavedContacts`, `values.listSavedLoginSummaries`.

SHA-256 of the source span: `c4e275204471a5b40cedbd5790e76ecbe0b629add721f7b1fd51be6948437baa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
