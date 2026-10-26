# `hasVaultPostalAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/vault-contact.ts` · [Module README](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724436-724438](../../../../../../../reference/runtime/host-main.cjs#L724436-L724438) | `FunctionDeclaration` | no | `address` |
| [evaluation:549915-549917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L549915-L549917) | `FunctionDeclaration` | no | `address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724436-724438](../../../../../../../reference/runtime/host-main.cjs#L724436-L724438) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549915-549917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L549915-L549917) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724436

Calls written directly in this body: `POSTAL_LINE_KEYS.some`.

SHA-256 of the source span: `064ffbfc3f6e5787de40112cd1b0958867096858a739251dfb060d7abeaceee7`.

### evaluation:549915

Calls written directly in this body: `POSTAL_LINE_KEYS.some`.

SHA-256 of the source span: `064ffbfc3f6e5787de40112cd1b0958867096858a739251dfb060d7abeaceee7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
