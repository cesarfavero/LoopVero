# `createMcpManagementTools/lastListedAccount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780281-780294](../../../../../../../reference/runtime/host-main.cjs#L780281-L780294) | `ArrowFunctionExpression` | yes | `listInstalled, resolution, accountLabel` |
| [evaluation:580526-580539](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580526-L580539) | `ArrowFunctionExpression` | yes | `listInstalled, resolution, accountLabel` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780281-780294](../../../../../../../reference/runtime/host-main.cjs#L780281-L780294) | 3 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:580526-580539](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580526-L580539) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:780281

Calls written directly in this body: `isAccount`, `listInstalled`, `listing.servers.find`, `normalizeMcpAccountLabel`.

SHA-256 of the source span: `88be1e318c864354e5ca055c66fa8f6623b506431a03f0e2c138e66f4d263ed6`.

### evaluation:580526

Calls written directly in this body: `isAccount`, `listInstalled`, `listing.servers.find`, `normalizeMcpAccountLabel`.

SHA-256 of the source span: `88be1e318c864354e5ca055c66fa8f6623b506431a03f0e2c138e66f4d263ed6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
