# `deleteContact`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768094-768106](../../../../../../../../reference/runtime/host-main.cjs#L768094-L768106) | `FunctionDeclaration` | yes | `deps, call, id` |
| [evaluation:563610-563622](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563610-L563622) | `FunctionDeclaration` | yes | `deps, call, id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768094-768106](../../../../../../../../reference/runtime/host-main.cjs#L768094-L768106) | 0 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:563610-563622](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563610-L563622) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:768094

Calls written directly in this body: `clampBlock`, `clampLine`, `savedContact`, `showCard`, `vaultContactSummary`.

SHA-256 of the source span: `0585e5ca6fc311b597e0ec8454a9cd0abaca3482f6fbce5fd83415e11c23af66`.

### evaluation:563610

Calls written directly in this body: `clampBlock`, `clampLine`, `savedContact`, `showCard`, `vaultContactSummary`.

SHA-256 of the source span: `0585e5ca6fc311b597e0ec8454a9cd0abaca3482f6fbce5fd83415e11c23af66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
