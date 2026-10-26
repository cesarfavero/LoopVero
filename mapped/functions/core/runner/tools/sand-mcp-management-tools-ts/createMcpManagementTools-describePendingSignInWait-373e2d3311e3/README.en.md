# `createMcpManagementTools/describePendingSignInWait`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780313-780330](../../../../../../../reference/runtime/host-main.cjs#L780313-L780330) | `ArrowFunctionExpression` | yes | `listInstalled, resolution, taskId` |
| [evaluation:580558-580575](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580558-L580575) | `ArrowFunctionExpression` | yes | `listInstalled, resolution, taskId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780313-780330](../../../../../../../reference/runtime/host-main.cjs#L780313-L780330) | 5 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:580558-580575](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580558-L580575) | 5 | 0 | 2 | 2 | 0 | 0 |

### host:780313

Calls written directly in this body: `describeStdioSignInWait`, `emitConnectorCard`, `listInstalled`, `listing.servers.find`, `stdioSignInOf`.

Assignment or increment targets: `signIn`.

SHA-256 of the source span: `3319b857a5154a42582a7d714472e8c0ee436a4e0241db2b28251a87542a4361`.

### evaluation:580558

Calls written directly in this body: `describeStdioSignInWait`, `emitConnectorCard`, `listInstalled`, `listing.servers.find`, `stdioSignInOf`.

Assignment or increment targets: `signIn`.

SHA-256 of the source span: `3319b857a5154a42582a7d714472e8c0ee436a4e0241db2b28251a87542a4361`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
