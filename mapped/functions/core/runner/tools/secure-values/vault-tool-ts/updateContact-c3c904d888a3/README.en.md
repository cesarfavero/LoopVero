# `updateContact`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768062-768093](../../../../../../../../reference/runtime/host-main.cjs#L768062-L768093) | `FunctionDeclaration` | yes | `deps, call, args` |
| [evaluation:563578-563609](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563578-L563609) | `FunctionDeclaration` | yes | `deps, call, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768062-768093](../../../../../../../../reference/runtime/host-main.cjs#L768062-L768093) | 5 | 1 | 2 | 2 | 1 | 0 |
| [evaluation:563578-563609](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563578-L563609) | 5 | 1 | 2 | 2 | 1 | 0 |

### host:768062

Calls written directly in this body: `JSON.stringify`, `Object.keys`, `blanksKeptNote`, `confirmForm`, `contactPrefill`, `mergeVaultContactPrefill`, `new SandToolInputError`, `refuseUnsavable`, `savedContact`, `showCard`, `vaultContactChangeSummary`, `vaultContactPrefillOf`.

Assignment or increment targets: `changes[computed]`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `3fa53b712235d07ae146cfa3e987bd59d1faad8862063af282643e757bfa939c`.

### evaluation:563578

Calls written directly in this body: `JSON.stringify`, `Object.keys`, `blanksKeptNote`, `confirmForm`, `contactPrefill`, `mergeVaultContactPrefill`, `new SandToolInputError`, `refuseUnsavable`, `savedContact`, `showCard`, `vaultContactChangeSummary`, `vaultContactPrefillOf`.

Assignment or increment targets: `changes[computed]`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `3fa53b712235d07ae146cfa3e987bd59d1faad8862063af282643e757bfa939c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
