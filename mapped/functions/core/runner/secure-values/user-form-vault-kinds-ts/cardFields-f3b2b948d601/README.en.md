# `cardFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/user-form-vault-kinds.ts` · [Module README](../../../../../../modules/core/runner/secure-values/user-form-vault-kinds-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724732-724750](../../../../../../../reference/runtime/host-main.cjs#L724732-L724750) | `FunctionDeclaration` | no | `prefill` |
| [evaluation:560291-560309](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560291-L560309) | `FunctionDeclaration` | no | `prefill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724732-724750](../../../../../../../reference/runtime/host-main.cjs#L724732-L724750) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560291-560309](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560291-L560309) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724732

Calls written directly in this body: `VAULT_CARD_FORM_FIELDS.map`, `checkPrefillKeys`.

SHA-256 of the source span: `4f288ca4e036f92cbbd4600ed4f1000871e09c021fb8d7fcac395772faeabbd2`.

### evaluation:560291

Calls written directly in this body: `VAULT_CARD_FORM_FIELDS.map`, `checkPrefillKeys`.

SHA-256 of the source span: `4f288ca4e036f92cbbd4600ed4f1000871e09c021fb8d7fcac395772faeabbd2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
