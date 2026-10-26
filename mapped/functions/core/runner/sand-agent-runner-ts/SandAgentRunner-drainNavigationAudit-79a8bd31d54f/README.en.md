# `_SandAgentRunner.drainNavigationAudit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594025-594038](../../../../../../reference/runtime/sand-eval-runner.cjs#L594025-L594038) | `method` | yes | `timeoutMs = 1e4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594025-594038](../../../../../../reference/runtime/sand-eval-runner.cjs#L594025-L594038) | 1 | 0 | 1 | 1 | 0 | 0 |

### evaluation:594025

Calls written directly in this body: `.catch`, `Promise.race`, `delay2`, `probe.abandonPendingReports`, `probe.flush`, `this.computerUse.getOrCreateNavigationProbe`.

SHA-256 of the source span: `0cf54fbcdec85a38067aeac0f5df822e95ce7cf4b994fe93f71e899ded55d5e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
