# `createMcpManagementTools/resolveServerId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780258-780276](../../../../../../../reference/runtime/host-main.cjs#L780258-L780276) | `ArrowFunctionExpression` | yes | `deps, token` |
| [evaluation:580503-580521](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580503-L580521) | `ArrowFunctionExpression` | yes | `deps, token` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780258-780276](../../../../../../../reference/runtime/host-main.cjs#L780258-L780276) | 5 | 0 | 1 | 4 | 0 | 0 |
| [evaluation:580503-580521](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580503-L580521) | 5 | 0 | 1 | 4 | 0 | 0 |

### host:780258

Calls written directly in this body: `isMcpServerId`, `readMcpInstalledListing`, `resolveMcpServerRowByIdentifierOrLegacyId`, `stdioSignInOf`, `token.trim`.

SHA-256 of the source span: `8733af4e8d6cf6213ef3ce1f39bac8b66d1c9648730ca3687fc97dd16253d1e2`.

### evaluation:580503

Calls written directly in this body: `isMcpServerId`, `readMcpInstalledListing`, `resolveMcpServerRowByIdentifierOrLegacyId`, `stdioSignInOf`, `token.trim`.

SHA-256 of the source span: `8733af4e8d6cf6213ef3ce1f39bac8b66d1c9648730ca3687fc97dd16253d1e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
