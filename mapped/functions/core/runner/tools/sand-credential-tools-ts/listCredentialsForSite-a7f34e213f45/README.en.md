# `listCredentialsForSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751921-751939](../../../../../../../reference/runtime/host-main.cjs#L751921-L751939) | `FunctionDeclaration` | yes | `deps, args, site, formGuidance` |
| [evaluation:524987-525005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524987-L525005) | `FunctionDeclaration` | yes | `deps, args, site, formGuidance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751921-751939](../../../../../../../reference/runtime/host-main.cjs#L751921-L751939) | 3 | 0 | 5 | 2 | 0 | 0 |
| [evaluation:524987-525005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524987-L525005) | 3 | 0 | 5 | 2 | 0 | 0 |

### host:751921

Calls written directly in this body: `deps.isConnected`, `listConnectedCredentials`, `notConnectedLoginGuidance`.

SHA-256 of the source span: `c7a2bc2ff3578b010e786e5684b0cdfd9947fe6ed98bb642c949b3fd447b5ca8`.

### evaluation:524987

Calls written directly in this body: `deps.isConnected`, `listConnectedCredentials`, `notConnectedLoginGuidance`.

SHA-256 of the source span: `c7a2bc2ff3578b010e786e5684b0cdfd9947fe6ed98bb642c949b3fd447b5ca8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
