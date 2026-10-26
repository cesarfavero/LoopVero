# `playwrightToolCallSpanResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700659-700681](../../../../../../reference/runtime/host-main.cjs#L700659-L700681) | `FunctionDeclaration` | no | `result` |
| [evaluation:514460-514482](../../../../../../reference/runtime/sand-eval-runner.cjs#L514460-L514482) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700659-700681](../../../../../../reference/runtime/host-main.cjs#L700659-L700681) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:514460-514482](../../../../../../reference/runtime/sand-eval-runner.cjs#L514460-L514482) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:700659

Calls written directly in this body: `TIMED_OUT_TOOL_ERROR_REASONS.has`, `snapshotSkipped`, `toolCallErrorClassLabel`.

SHA-256 of the source span: `b476cf29ddd13d1a20176d976309f024622c9eb872488e4e3af7db9453692aec`.

### evaluation:514460

Calls written directly in this body: `TIMED_OUT_TOOL_ERROR_REASONS.has`, `snapshotSkipped`, `toolCallErrorClassLabel`.

SHA-256 of the source span: `b476cf29ddd13d1a20176d976309f024622c9eb872488e4e3af7db9453692aec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
