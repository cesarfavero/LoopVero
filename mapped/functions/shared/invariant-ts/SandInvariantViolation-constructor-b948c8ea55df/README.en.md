# `SandInvariantViolation.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/invariant.ts` · [Module README](../../../../modules/shared/invariant-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:474307-474310](../../../../../reference/runtime/sand-eval-runner.cjs#L474307-L474310) | `method` | no | `message` |
| [state-worker:31-34](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L31-L34) | `method` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:474307-474310](../../../../../reference/runtime/sand-eval-runner.cjs#L474307-L474310) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:31-34](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L31-L34) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:474307

Calls written directly in this body: `super`.

Assignment or increment targets: `this.name`.

SHA-256 of the source span: `6cabc5d08ccd6f8fbff9cf7233597dd8e02bd9beb17d62ffebaf0b93f8f05e8a`.

### state-worker:31

Calls written directly in this body: `super`.

Assignment or increment targets: `this.name`.

SHA-256 of the source span: `6cabc5d08ccd6f8fbff9cf7233597dd8e02bd9beb17d62ffebaf0b93f8f05e8a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
