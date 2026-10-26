# `summarizeCredentialRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-request.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725534-725540](../../../../../../../reference/runtime/host-main.cjs#L725534-L725540) | `FunctionDeclaration` | no | `request5` |
| [evaluation:524637-524643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524637-L524643) | `FunctionDeclaration` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725534-725540](../../../../../../../reference/runtime/host-main.cjs#L725534-L725540) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:524637-524643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524637-L524643) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:725534

Calls written directly in this body: `browserLoginLabel`, `describeBrokeredEntries`, `reusedEntriesNote`.

SHA-256 of the source span: `3366ce59328a3387e8f2a8e61d6aecb5811e1ab539ca4ca1a896ab92d40090a8`.

### evaluation:524637

Calls written directly in this body: `browserLoginLabel`, `describeBrokeredEntries`, `reusedEntriesNote`.

SHA-256 of the source span: `da5ed870feef8ca4b8d931e01777ad2e5924008c436833fa66ebf4c0e7efb5fd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
