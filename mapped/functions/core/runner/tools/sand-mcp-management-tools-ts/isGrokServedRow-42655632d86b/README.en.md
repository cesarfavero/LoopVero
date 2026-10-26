# `isGrokServedRow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779710-779712](../../../../../../../reference/runtime/host-main.cjs#L779710-L779712) | `FunctionDeclaration` | no | `row` |
| [evaluation:579948-579950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579948-L579950) | `FunctionDeclaration` | no | `row` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779710-779712](../../../../../../../reference/runtime/host-main.cjs#L779710-L779712) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579948-579950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579948-L579950) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779710

Calls written directly in this body: `row.id.startsWith`.

SHA-256 of the source span: `86992aa4200441efa675284ef1cf40b384764da3fa857a206798c590dc0b1a3d`.

### evaluation:579948

Calls written directly in this body: `row.id.startsWith`.

SHA-256 of the source span: `86992aa4200441efa675284ef1cf40b384764da3fa857a206798c590dc0b1a3d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
