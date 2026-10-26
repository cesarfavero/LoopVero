# `toInstalledServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700813-700831](../../../../../../reference/runtime/host-main.cjs#L700813-L700831) | `FunctionDeclaration` | no | `summary` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700813-700831](../../../../../../reference/runtime/host-main.cjs#L700813-L700831) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:700813

Calls written directly in this body: `installedStatusDetail`, `isPendingSignIn`.

SHA-256 of the source span: `b92ca52fe406e5c83e4ba4a302f2674895fb2ac2e6b4510e2e00465fdd4c7828`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
