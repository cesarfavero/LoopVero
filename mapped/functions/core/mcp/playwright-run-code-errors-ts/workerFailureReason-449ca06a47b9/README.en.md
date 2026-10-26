# `workerFailureReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700257-700266](../../../../../../reference/runtime/host-main.cjs#L700257-L700266) | `FunctionDeclaration` | no | `failure3, exited, exitCode, termSignal` |
| [evaluation:514038-514047](../../../../../../reference/runtime/sand-eval-runner.cjs#L514038-L514047) | `FunctionDeclaration` | no | `failure3, exited, exitCode, termSignal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700257-700266](../../../../../../reference/runtime/host-main.cjs#L700257-L700266) | 8 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:514038-514047](../../../../../../reference/runtime/sand-eval-runner.cjs#L514038-L514047) | 8 | 0 | 0 | 8 | 0 | 0 |

### host:700257

Calls written directly in this body: `HEAP_OOM.test`, `RLIMIT_ERROR.test`, `RLIMIT_SIGNALS.has`, `RUN_CODE_INVALID_RESULTS.has`, `failure3.message.startsWith`.

SHA-256 of the source span: `1324149bb784a71c8a36c19be53c7ff228eab3a732f479f01ef47dc3ccbd01ca`.

### evaluation:514038

Calls written directly in this body: `HEAP_OOM.test`, `RLIMIT_ERROR.test`, `RLIMIT_SIGNALS.has`, `RUN_CODE_INVALID_RESULTS.has`, `failure3.message.startsWith`.

SHA-256 of the source span: `1324149bb784a71c8a36c19be53c7ff228eab3a732f479f01ef47dc3ccbd01ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
