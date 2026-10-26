# `resolveMcpServerRowByIdentifierOrLegacyId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-server-resolution.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-server-resolution-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779453-779455](../../../../../../../reference/runtime/host-main.cjs#L779453-L779455) | `FunctionDeclaration` | no | `installed, token` |
| [evaluation:579691-579693](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579691-L579693) | `FunctionDeclaration` | no | `installed, token` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779453-779455](../../../../../../../reference/runtime/host-main.cjs#L779453-L779455) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579691-579693](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579691-L579693) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779453

Calls written directly in this body: `resolveMcpServerRowsByIdentifierOrLegacyId`.

SHA-256 of the source span: `c05dd6f4a8adaf1ceb2c251d4b77ee3a8906985d7a5a93d4f1c15165fc4122ef`.

### evaluation:579691

Calls written directly in this body: `resolveMcpServerRowsByIdentifierOrLegacyId`.

SHA-256 of the source span: `c05dd6f4a8adaf1ceb2c251d4b77ee3a8906985d7a5a93d4f1c15165fc4122ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
