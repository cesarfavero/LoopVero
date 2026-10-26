# `failInvariant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/invariant.ts` · [Module README](../../../../modules/shared/invariant-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:854-871](../../../../../reference/runtime/host-main.cjs#L854-L871) | `FunctionDeclaration` | no | `message, boundary` |
| [evaluation:474335-474352](../../../../../reference/runtime/sand-eval-runner.cjs#L474335-L474352) | `FunctionDeclaration` | no | `message, boundary` |
| [state-worker:59-76](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L59-L76) | `FunctionDeclaration` | no | `message, boundary` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:854-871](../../../../../reference/runtime/host-main.cjs#L854-L871) | 4 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:474335-474352](../../../../../reference/runtime/sand-eval-runner.cjs#L474335-L474352) | 4 | 0 | 0 | 0 | 1 | 0 |
| [state-worker:59-76](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L59-L76) | 4 | 0 | 0 | 0 | 1 | 0 |

### host:854

Calls written directly in this body: `Error.captureStackTrace`, `installedReporter`, `message`, `messagesStripped`, `new SandInvariantViolation`, `topApplicationFrame`.

Assignment or increment targets: `frame`, `violationMessage`.

Explicit throw targets: `violation`.

SHA-256 of the source span: `71a8447d740ebbf37f661038b4a8afd540b96a153cb785647a370089d8473835`.

### evaluation:474335

Calls written directly in this body: `Error.captureStackTrace`, `installedReporter`, `message`, `messagesStripped`, `new SandInvariantViolation`, `topApplicationFrame`.

Assignment or increment targets: `frame`, `violationMessage`.

Explicit throw targets: `violation`.

SHA-256 of the source span: `71a8447d740ebbf37f661038b4a8afd540b96a153cb785647a370089d8473835`.

### state-worker:59

Calls written directly in this body: `Error.captureStackTrace`, `installedReporter`, `message`, `messagesStripped`, `new SandInvariantViolation`, `topApplicationFrame`.

Assignment or increment targets: `frame`, `violationMessage`.

Explicit throw targets: `violation`.

SHA-256 of the source span: `71a8447d740ebbf37f661038b4a8afd540b96a153cb785647a370089d8473835`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
