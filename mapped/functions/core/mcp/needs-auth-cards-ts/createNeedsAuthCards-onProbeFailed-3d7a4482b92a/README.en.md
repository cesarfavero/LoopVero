# `createNeedsAuthCards/onProbeFailed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-cards.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584935-584938](../../../../../../reference/runtime/sand-eval-runner.cjs#L584935-L584938) | `ArrowFunctionExpression` | no | `probeError` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584935-584938](../../../../../../reference/runtime/sand-eval-runner.cjs#L584935-L584938) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:584935 uses an implicit arrow-function return.

### evaluation:584935

Calls written directly in this body: `errorLogTag`, `reportHostDiagnostic`.

SHA-256 of the source span: `ea543fe963ea1687125451f30d153cf0d8c390e9df644da8dd08d64473b4e55d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
