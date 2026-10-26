# `resolveDynamicInvocationToolCallTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554177-554196](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554177-L554196) | `FunctionDeclaration` | no | `tool, rawArgs, driveTranslatorToolTags` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554177-554196](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554177-L554196) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:554177

Calls written directly in this body: `boundedConnectorTag`, `boundedMcpToolName`, `isReservedDynamicToolsNamespace`, `parseDynamicInvocationArgs`, `resolveToolCallIdentity`.

SHA-256 of the source span: `254bbbcf4a5b0225950a504a9c41bc648c984bcc528e7f91150916db433df1f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
