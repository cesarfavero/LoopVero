# `stdioSignInOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779717-779723](../../../../../../../reference/runtime/host-main.cjs#L779717-L779723) | `FunctionDeclaration` | no | `row` |
| [evaluation:579955-579961](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579955-L579961) | `FunctionDeclaration` | no | `row` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779717-779723](../../../../../../../reference/runtime/host-main.cjs#L779717-L779723) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579955-579961](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579955-L579961) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:779717

Calls written directly in this body: `connectCardServerId`.

SHA-256 of the source span: `67696e4a822b6d37dbe8a290e3da2a2d59802104018b9bcc2c6b2ba8f4a824f9`.

### evaluation:579955

Calls written directly in this body: `connectCardServerId`.

SHA-256 of the source span: `67696e4a822b6d37dbe8a290e3da2a2d59802104018b9bcc2c6b2ba8f4a824f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
