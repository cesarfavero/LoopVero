# `createReportSiteBlockedTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/report-site-blocked-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/report-site-blocked-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776737-776747](../../../../../../../../reference/runtime/host-main.cjs#L776737-L776747) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:576388-576398](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576388-L576398) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776737-776747](../../../../../../../../reference/runtime/host-main.cjs#L776737-L776747) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576388-576398](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576388-L576398) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776737

Calls written directly in this body: `d.getConversationId`, `d.reportSiteBlocked`, `getRequestId`, `siteBlockDomain`.

SHA-256 of the source span: `0ba9dc3211c8ed8ffa48f75bd23bcd03ecf4f29ec20277002b7581eed333aa8b`.

### evaluation:576388

Calls written directly in this body: `d.getConversationId`, `d.reportSiteBlocked`, `getRequestId`, `siteBlockDomain`.

SHA-256 of the source span: `0ba9dc3211c8ed8ffa48f75bd23bcd03ecf4f29ec20277002b7581eed333aa8b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
