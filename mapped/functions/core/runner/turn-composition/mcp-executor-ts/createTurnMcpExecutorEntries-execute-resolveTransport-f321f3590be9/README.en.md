# `createTurnMcpExecutorEntries/execute/resolveTransport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/turn-composition/mcp-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586041-586041](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586041-L586041) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:586142-586142](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586142-L586142) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586041-586041](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586041-L586041) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:586041 uses an implicit arrow-function return.
| [evaluation:586142-586142](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586142-L586142) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:586142 uses an implicit arrow-function return.

### evaluation:586041

Calls written directly in this body: `mcp.resolveToolTransport`.

SHA-256 of the source span: `3f6347ed058f4f6d7c75fcddace89403a484209ebf942ccb156cb759edf1fb30`.

### evaluation:586142

Calls written directly in this body: `Promise.resolve`, `mcp.resolveToolTransport`.

SHA-256 of the source span: `2e2bc6fe3a3275823b3e4d6812205fe30ee3811fcbf9298d9fe6ff4f9edb1b5d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
