# `saveContact`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768039-768055](../../../../../../../../reference/runtime/host-main.cjs#L768039-L768055) | `FunctionDeclaration` | yes | `deps, call, contact` |
| [evaluation:563555-563571](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563555-L563571) | `FunctionDeclaration` | yes | `deps, call, contact` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768039-768055](../../../../../../../../reference/runtime/host-main.cjs#L768039-L768055) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:563555-563571](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563555-L563571) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:768039

Calls written directly in this body: `Object.keys`, `confirmForm`, `contactPrefill`, `new SandToolInputError`, `refuseUnsavable`, `showCard`, `vaultContactChangeSummary`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `4a2b1f7b838ebb17ab813dc5ab103b7b661ac2a07ddf0b1298c77497282d1957`.

### evaluation:563555

Calls written directly in this body: `Object.keys`, `confirmForm`, `contactPrefill`, `new SandToolInputError`, `refuseUnsavable`, `showCard`, `vaultContactChangeSummary`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `4a2b1f7b838ebb17ab813dc5ab103b7b661ac2a07ddf0b1298c77497282d1957`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
