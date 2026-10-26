# `onHostedGmailConnection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756063-756065](../../../../../../../reference/runtime/host-main.cjs#L756063-L756065) | `FunctionDeclaration` | no | `mcp, route` |
| [evaluation:541951-541953](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541951-L541953) | `FunctionDeclaration` | no | `mcp, route` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756063-756065](../../../../../../../reference/runtime/host-main.cjs#L756063-L756065) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541951-541953](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541951-L541953) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756063

Calls written directly in this body: `.toLowerCase`, `emailConnectorOf`, `isHostedGmailRoute`, `mcp.resolveServerHost`.

SHA-256 of the source span: `e7e4b42b07b5179964d250855e9b5639e686ffd9022bb4560ff20613b3c8deec`.

### evaluation:541951

Calls written directly in this body: `.toLowerCase`, `emailConnectorOf`, `isHostedGmailRoute`, `mcp.resolveServerHost`.

SHA-256 of the source span: `e7e4b42b07b5179964d250855e9b5639e686ffd9022bb4560ff20613b3c8deec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
