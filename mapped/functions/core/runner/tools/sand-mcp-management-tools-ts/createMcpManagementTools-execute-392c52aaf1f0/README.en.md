# `createMcpManagementTools/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780352-780359](../../../../../../../reference/runtime/host-main.cjs#L780352-L780359) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |
| [host:780366-780375](../../../../../../../reference/runtime/host-main.cjs#L780366-L780375) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |
| [host:780559-780571](../../../../../../../reference/runtime/host-main.cjs#L780559-L780571) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |
| [evaluation:580597-580604](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580597-L580604) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |
| [evaluation:580611-580620](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580611-L580620) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |
| [evaluation:580804-580816](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580804-L580816) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780352-780359](../../../../../../../reference/runtime/host-main.cjs#L780352-L780359) | 1 | 0 | 2 | 1 | 0 | 0 |
| [host:780366-780375](../../../../../../../reference/runtime/host-main.cjs#L780366-L780375) | 1 | 0 | 1 | 2 | 0 | 0 |
| [host:780559-780571](../../../../../../../reference/runtime/host-main.cjs#L780559-L780571) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:580597-580604](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580597-L580604) | 1 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:580611-580620](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580611-L580620) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:580804-580816](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580804-L580816) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:780352

Calls written directly in this body: `.trim`, `deps.listPlugins`, `describeSearch`, `rankPluginsLexically`, `reportMarketplaceSearch`, `searchRecall`.

SHA-256 of the source span: `2c1f8af961891ea5219448298ca166881e2e6e3d7f8bb6cf5ae66967610dd935`.

### host:780366

Calls written directly in this body: `deps.getPlugin`, `describePluginDetail`.

SHA-256 of the source span: `1e610edb52c187b326cd3340945906446be547cfb383d0c2cb068fa622ff79c8`.

### host:780559

Calls written directly in this body: `.join`, `args.server_id.trim`, `deps.listInstalled`, `describeInstalledList`, `resolveMcpServerRowsByIdentifierOrLegacyId`, `rows.map`.

SHA-256 of the source span: `3915aa2982bd00915833506c7d3104fa1da1ce49688aad98dc19dc9d3423df8f`.

### evaluation:580597

Calls written directly in this body: `.trim`, `deps.listPlugins`, `describeSearch`, `rankPluginsLexically`, `reportMarketplaceSearch`, `searchRecall`.

SHA-256 of the source span: `2c1f8af961891ea5219448298ca166881e2e6e3d7f8bb6cf5ae66967610dd935`.

### evaluation:580611

Calls written directly in this body: `deps.getPlugin`, `describePluginDetail`.

SHA-256 of the source span: `1e610edb52c187b326cd3340945906446be547cfb383d0c2cb068fa622ff79c8`.

### evaluation:580804

Calls written directly in this body: `.join`, `args.server_id.trim`, `deps.listInstalled`, `describeInstalledList`, `resolveMcpServerRowsByIdentifierOrLegacyId`, `rows.map`.

SHA-256 of the source span: `3915aa2982bd00915833506c7d3104fa1da1ce49688aad98dc19dc9d3423df8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
