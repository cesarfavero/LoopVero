# `createVaultTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768116-768145](../../../../../../../../reference/runtime/host-main.cjs#L768116-L768145) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:563632-563661](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563632-L563661) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768116-768145](../../../../../../../../reference/runtime/host-main.cjs#L768116-L768145) | 9 | 0 | 6 | 5 | 2 | 0 |
| [evaluation:563632-563661](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563632-L563661) | 9 | 0 | 6 | 5 | 2 | 0 |

### host:768116

Calls written directly in this body: `deleteContact`, `listChatValuesOnly`, `listVault`, `new SandToolInputError`, `normalizeSecureValuesUserFormRequest`, `notAvailable`, `saveContact`, `showCard`, `updateContact`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `0c11e7e28fa730e38b73922167248066656d0abae841f20b2423cf1652c74308`.

### evaluation:563632

Calls written directly in this body: `deleteContact`, `listChatValuesOnly`, `listVault`, `new SandToolInputError`, `normalizeSecureValuesUserFormRequest`, `notAvailable`, `saveContact`, `showCard`, `updateContact`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `0c11e7e28fa730e38b73922167248066656d0abae841f20b2423cf1652c74308`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
