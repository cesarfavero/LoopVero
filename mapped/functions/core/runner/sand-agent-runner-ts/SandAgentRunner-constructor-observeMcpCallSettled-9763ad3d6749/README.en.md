# `_SandAgentRunner.constructor/observeMcpCallSettled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593304-593318](../../../../../../reference/runtime/sand-eval-runner.cjs#L593304-L593318) | `ArrowFunctionExpression` | no | `_ctx, settlement` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593304-593318](../../../../../../reference/runtime/sand-eval-runner.cjs#L593304-L593318) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:593304

Calls written directly in this body: `boundedMcpToolName`, `mcpToolCallTarget`, `this.gates.driveTranslatorToolTags`, `this.observation.observeMcpCallSettled`.

SHA-256 of the source span: `1d256f4c0ed8baeff8d406ed00409f97bad3629a1da0fac2b2b0f0a8cd7f39dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
