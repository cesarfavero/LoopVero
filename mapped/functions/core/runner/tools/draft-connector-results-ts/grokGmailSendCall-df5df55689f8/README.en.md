# `grokGmailSendCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732869-732888](../../../../../../../reference/runtime/host-main.cjs#L732869-L732888) | `FunctionDeclaration` | no | `route, draft, {   account,   recipients,   cc }` |
| [evaluation:540391-540410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540391-L540410) | `FunctionDeclaration` | no | `route, draft, {   account,   recipients,   cc }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732869-732888](../../../../../../../reference/runtime/host-main.cjs#L732869-L732888) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540391-540410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540391-L540410) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:732869

Calls written directly in this body: `signedGmailBodies`.

SHA-256 of the source span: `d340095cb7837b1feffe31a8e268a855cb8f8c4da9a69513380c5ad70fff1a64`.

### evaluation:540391

Calls written directly in this body: `signedGmailBodies`.

SHA-256 of the source span: `d340095cb7837b1feffe31a8e268a855cb8f8c4da9a69513380c5ad70fff1a64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
