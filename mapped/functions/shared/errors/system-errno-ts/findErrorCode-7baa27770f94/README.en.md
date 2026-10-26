# `findErrorCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/system-errno.ts` · [Module README](../../../../../modules/shared/errors/system-errno-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773-783](../../../../../../reference/runtime/host-main.cjs#L773-L783) | `FunctionDeclaration` | no | `error64, pattern` |
| [evaluation:474664-474674](../../../../../../reference/runtime/sand-eval-runner.cjs#L474664-L474674) | `FunctionDeclaration` | no | `error63, pattern` |
| [state-worker:342-352](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L342-L352) | `FunctionDeclaration` | no | `error, pattern` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773-783](../../../../../../reference/runtime/host-main.cjs#L773-L783) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:474664-474674](../../../../../../reference/runtime/sand-eval-runner.cjs#L474664-L474674) | 1 | 1 | 0 | 2 | 0 | 0 |
| [state-worker:342-352](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L342-L352) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:773

Calls written directly in this body: `new Set`, `pattern.test`, `seen.add`, `seen.has`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `99eb192114bb2544057fb76785be6a88ca6b34fa92ac0fc36df4d959e6b55ed3`.

### evaluation:474664

Calls written directly in this body: `new Set`, `pattern.test`, `seen.add`, `seen.has`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `50149e06bfccfb4b7bc1d2cfd58021ed5a0d93bee26011c9cee0de0e5ff46d67`.

### state-worker:342

Calls written directly in this body: `new Set`, `pattern.test`, `seen.add`, `seen.has`.

Assignment or increment targets: `current`.

SHA-256 of the source span: `c0d1249650f750843272f0d96b8dec6466d8f88ae3d2cbebba753ff823d1ff13`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
