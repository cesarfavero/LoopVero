# `McpHostService.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-service.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701504-701589](../../../../../../../reference/runtime/host-main.cjs#L701504-L701589) | `method` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701504-701589](../../../../../../../reference/runtime/host-main.cjs#L701504-L701589) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:701504

Calls written directly in this body: `createAccountMcpWriter`, `createBoxSandMcpExec`, `createDashboardSandBackendMcpExec`, `marketplaceDashboardClientFor`.

Assignment or increment targets: `this.api`, `this.deps`, `this.hostMcp`.

SHA-256 of the source span: `be5a78b3a787e6aefa4cf1878f298402449f6dae9da4188e652547f0e4245d16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
