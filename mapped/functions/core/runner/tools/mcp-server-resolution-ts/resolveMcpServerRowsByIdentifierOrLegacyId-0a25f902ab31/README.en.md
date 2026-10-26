# `resolveMcpServerRowsByIdentifierOrLegacyId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-server-resolution.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-server-resolution-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779444-779452](../../../../../../../reference/runtime/host-main.cjs#L779444-L779452) | `FunctionDeclaration` | no | `installed, token` |
| [evaluation:579682-579690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579682-L579690) | `FunctionDeclaration` | no | `installed, token` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779444-779452](../../../../../../../reference/runtime/host-main.cjs#L779444-L779452) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:579682-579690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579682-L579690) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:779444

Calls written directly in this body: `installed.filter`, `token.trim`.

SHA-256 of the source span: `b1457979d00bae53d079600239d95a8f5a1d4c8ae34f71e2e68f7ff2c57c4524`.

### evaluation:579682

Calls written directly in this body: `installed.filter`, `token.trim`.

SHA-256 of the source span: `b1457979d00bae53d079600239d95a8f5a1d4c8ae34f71e2e68f7ff2c57c4524`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
