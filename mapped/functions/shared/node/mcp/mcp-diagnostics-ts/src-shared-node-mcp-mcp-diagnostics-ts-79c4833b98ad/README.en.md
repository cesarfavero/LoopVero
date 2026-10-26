# `src/shared/node/mcp/mcp-diagnostics.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-diagnostics.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226215-226231](../../../../../../../reference/runtime/host-main.cjs#L226215-L226231) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226215-226231](../../../../../../../reference/runtime/host-main.cjs#L226215-L226231) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:226215

Calls written directly in this body: `Symbol`, `createKey`, `init_dist5`, `init_errors`, `init_esm2`, `init_local_exec_failure_classifier`, `init_system_errno`, `new Set`.

Assignment or increment targets: `BOX_STDIO_STATUS_REPORT_CAP`, `PRE_PIN_BUFFER_CAP`, `buffered`, `mcpExecAttributionKey`, `pinnedReporter3`, `reportedBoxStdioStatuses`.

SHA-256 of the source span: `854edfcb45552e05b701adb56485271e9852e7fe159be238c9be9b81e7050347`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
