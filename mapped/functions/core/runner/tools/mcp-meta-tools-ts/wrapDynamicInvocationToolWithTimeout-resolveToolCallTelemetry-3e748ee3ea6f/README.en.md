# `wrapDynamicInvocationToolWithTimeout/resolveToolCallTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554209-554213](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554209-L554213) | `ArrowFunctionExpression` | no | `rawArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554209-554213](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554209-L554213) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:554209 uses an implicit arrow-function return.

### evaluation:554209

Calls written directly in this body: `driveTranslatorToolTags`, `resolveDynamicInvocationToolCallTelemetry`.

SHA-256 of the source span: `abf77d5ec67b5d1b01e5862860446acdbbe74656a667f0166401dd452514ee8c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
