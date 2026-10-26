# `resolveSendMessageSecretTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-secret-request.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-secret-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758381-758396](../../../../../../../reference/runtime/host-main.cjs#L758381-L758396) | `FunctionDeclaration` | yes | `secret, resolve31` |
| [evaluation:548040-548055](../../../../../../../reference/runtime/sand-eval-runner.cjs#L548040-L548055) | `FunctionDeclaration` | yes | `secret, resolve19` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758381-758396](../../../../../../../reference/runtime/host-main.cjs#L758381-L758396) | 6 | 0 | 1 | 3 | 2 | 1 |
| [evaluation:548040-548055](../../../../../../../reference/runtime/sand-eval-runner.cjs#L548040-L548055) | 6 | 0 | 1 | 3 | 2 | 1 |

### host:758381

Calls written directly in this body: `boxEnvSecretTarget`, `new SandToolInputError`, `resolve31`, `resolve31.afterRefusal`.

Explicit throw targets: `SandToolInputError`, `error64`.

SHA-256 of the source span: `1a3963618cffa63c203ba5552c63b94200726bc66e12707e6dd025bf8e3e7e66`.

### evaluation:548040

Calls written directly in this body: `boxEnvSecretTarget`, `new SandToolInputError`, `resolve19`, `resolve19.afterRefusal`.

Explicit throw targets: `SandToolInputError`, `error63`.

SHA-256 of the source span: `88070f02d3eaaa29aad65adc25fdebadb0a073101911c0da5831ac58ef3e5edf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
