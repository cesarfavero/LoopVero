# `build`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/turn-builders/mcp-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/mcp-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780730-780768](../../../../../../../../reference/runtime/host-main.cjs#L780730-L780768) | `ArrowFunctionExpression` | no | `{     host,     turn,     decisions,     mcpMetaToolNames   }` |
| [evaluation:580972-581051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L580972-L581051) | `ArrowFunctionExpression` | no | `ctx` |
| [evaluation:581068-581106](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581068-L581106) | `ArrowFunctionExpression` | no | `{     host,     turn,     decisions,     mcpMetaToolNames   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780730-780768](../../../../../../../../reference/runtime/host-main.cjs#L780730-L780768) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:580972-581051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L580972-L581051) | 11 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581068-581106](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581068-L581106) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:780730

Calls written directly in this body: `createMcpManagementTools`, `host.gates.webFetchDisabled`, `host.teamBot`.

SHA-256 of the source span: `6328a44e655018d1f1d274b5af0b1cff0f51272312781f7e25e6abbe6083d946`.

### evaluation:580972

Calls written directly in this body: `atlassianHostFilledArguments`, `createCallMcpTool`, `createGetMcpToolsTool`, `createSandAutoReviewMcpGate`, `createSandMcpMetaToolOptions`, `ctx.decisions.offers`, `mcpToolPermissionResolver`, `readonlyCallMcpToolOptions`, `targetedNeedsGrantRequestForTurn`, `turn.externalSendCheckFor`, `turn.getAutoReviewUserInstructions`, `withoutPlaywrightBoxServers`.

SHA-256 of the source span: `7dc328a06fd69b49a847127202db831ebb4bc7ef251505d883ac894c8358884d`.

### evaluation:581068

Calls written directly in this body: `createMcpManagementTools`, `host.gates.webFetchDisabled`, `host.teamBot`.

SHA-256 of the source span: `6328a44e655018d1f1d274b5af0b1cff0f51272312781f7e25e6abbe6083d946`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
