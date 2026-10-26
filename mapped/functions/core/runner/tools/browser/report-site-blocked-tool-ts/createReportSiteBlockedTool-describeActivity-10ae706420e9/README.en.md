# `createReportSiteBlockedTool/describeActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/report-site-blocked-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/report-site-blocked-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776736-776736](../../../../../../../../reference/runtime/host-main.cjs#L776736-L776736) | `ArrowFunctionExpression` | no | `args` |
| [evaluation:576387-576387](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576387-L576387) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776736-776736](../../../../../../../../reference/runtime/host-main.cjs#L776736-L776736) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:776736 uses an implicit arrow-function return.
| [evaluation:576387-576387](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576387-L576387) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:576387 uses an implicit arrow-function return.

### host:776736

Calls written directly in this body: `siteBlockDomain`.

SHA-256 of the source span: `75ddf539880b07602bdce2c9281661a0d1b30884a8a3c5a2917f00b10aee633d`.

### evaluation:576387

Calls written directly in this body: `siteBlockDomain`.

SHA-256 of the source span: `75ddf539880b07602bdce2c9281661a0d1b30884a8a3c5a2917f00b10aee633d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
