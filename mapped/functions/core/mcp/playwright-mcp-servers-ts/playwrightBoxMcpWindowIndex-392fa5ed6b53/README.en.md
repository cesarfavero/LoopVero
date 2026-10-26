# `playwrightBoxMcpWindowIndex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-mcp-servers.ts` · [Module README](../../../../../modules/core/mcp/playwright-mcp-servers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700758-700761](../../../../../../reference/runtime/host-main.cjs#L700758-L700761) | `FunctionDeclaration` | no | `serverName` |
| [evaluation:514906-514909](../../../../../../reference/runtime/sand-eval-runner.cjs#L514906-L514909) | `FunctionDeclaration` | no | `serverName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700758-700761](../../../../../../reference/runtime/host-main.cjs#L700758-L700761) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514906-514909](../../../../../../reference/runtime/sand-eval-runner.cjs#L514906-L514909) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:700758

Calls written directly in this body: `Number`, `PLAYWRIGHT_BOX_MCP_SERVER_NAME.exec`.

SHA-256 of the source span: `087d5ac92a6350a491d25fe3613bd0aa663af35687ca4ebb494cca6bd63049e7`.

### evaluation:514906

Calls written directly in this body: `Number`, `PLAYWRIGHT_BOX_MCP_SERVER_NAME.exec`.

SHA-256 of the source span: `087d5ac92a6350a491d25fe3613bd0aa663af35687ca4ebb494cca6bd63049e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
