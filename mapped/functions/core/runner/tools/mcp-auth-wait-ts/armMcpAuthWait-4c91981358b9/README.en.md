# `armMcpAuthWait`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-auth-wait.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-auth-wait-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765309-765329](../../../../../../../reference/runtime/host-main.cjs#L765309-L765329) | `FunctionDeclaration` | no | `register, emission` |
| [evaluation:558676-558696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558676-L558696) | `FunctionDeclaration` | no | `register, emission` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765309-765329](../../../../../../../reference/runtime/host-main.cjs#L765309-L765329) | 6 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:558676-558696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558676-L558696) | 6 | 0 | 0 | 2 | 0 | 1 |

### host:765309

Calls written directly in this body: `errorClassOf`, `pending.catch`, `register`, `reportHostDiagnostic`.

Assignment or increment targets: `pending`.

SHA-256 of the source span: `674a5d973b0ca97592ef8c037e0cb7cd3d69e1832fafd29e69d2c8935233e864`.

### evaluation:558676

Calls written directly in this body: `errorClassOf`, `pending.catch`, `register`, `reportHostDiagnostic`.

Assignment or increment targets: `pending`.

SHA-256 of the source span: `8e234f7f8ad1cedb93604bb0ed11ab0281d84849ef52a624cb47e4124d447101`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
