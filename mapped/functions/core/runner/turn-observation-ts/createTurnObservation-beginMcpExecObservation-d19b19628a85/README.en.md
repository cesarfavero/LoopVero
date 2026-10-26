# `createTurnObservation/beginMcpExecObservation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-observation.ts` · [Module README](../../../../../modules/core/runner/turn-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588590-588669](../../../../../../reference/runtime/sand-eval-runner.cjs#L588590-L588669) | `FunctionDeclaration` | no | `call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588590-588669](../../../../../../reference/runtime/sand-eval-runner.cjs#L588590-L588669) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588590

Calls written directly in this body: `.catch`, `Promise.resolve`, `call.resolveRoute`, `call.resolveTransport`, `clock.monotonicNow`, `mcpExecStallExpiry.arm`, `mcpExecToolCallIds.add`.

SHA-256 of the source span: `917bbb2aac78ada533ce8b3a0a49213d2e7ad25eb12fa270d0a4750903e2cd79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
