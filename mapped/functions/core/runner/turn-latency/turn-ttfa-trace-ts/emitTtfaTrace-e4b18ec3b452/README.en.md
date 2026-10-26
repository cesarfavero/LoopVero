# `emitTtfaTrace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-latency/turn-ttfa-trace.ts` · [Module README](../../../../../../modules/core/runner/turn-latency/turn-ttfa-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546896-546923](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546896-L546923) | `FunctionDeclaration` | no | `{   trace: trace2,   marks,   toEpochMs,   attributes }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546896-546923](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546896-L546923) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:546896

Calls written directly in this body: `Math.max`, `classifyTtfaBucket`, `getSpan2`, `recordCompletedSpanIfParented`, `runSpan.setAttribute`, `runSpan.setAttributes`, `toEpochMs`, `trace2.phaseParentCtx.withName`, `ttfaPhaseSpans`.

SHA-256 of the source span: `a750270aaeff460841dc8940268611a46ae5131f0b90571abc022443e4213e00`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
