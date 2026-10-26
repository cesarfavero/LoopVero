# `sandCredentialTurnRefusalPhrase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/credentials.ts` · [Module README](../../../../../modules/core/ports/credentials-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724818-724820](../../../../../../reference/runtime/host-main.cjs#L724818-L724820) | `FunctionDeclaration` | no | `reason, vaultOnly` |
| [evaluation:524580-524582](../../../../../../reference/runtime/sand-eval-runner.cjs#L524580-L524582) | `FunctionDeclaration` | no | `reason, vaultOnly` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724818-724820](../../../../../../reference/runtime/host-main.cjs#L724818-L724820) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524580-524582](../../../../../../reference/runtime/sand-eval-runner.cjs#L524580-L524582) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:724818

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `4710ca14e4276b5b7412c39443c3d7a46e921d231820eb6a6d8b123f9ff9d651`.

### evaluation:524580

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `4710ca14e4276b5b7412c39443c3d7a46e921d231820eb6a6d8b123f9ff9d651`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
