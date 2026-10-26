# `resolveSandDataRootOverride`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430902-430905](../../../../../reference/runtime/host-main.cjs#L430902-L430905) | `FunctionDeclaration` | no | `env = process.env` |
| [evaluation:530494-530497](../../../../../reference/runtime/sand-eval-runner.cjs#L530494-L530497) | `FunctionDeclaration` | no | `env = process.env` |
| [state-worker:413-416](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L413-L416) | `FunctionDeclaration` | no | `env = process.env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430902-430905](../../../../../reference/runtime/host-main.cjs#L430902-L430905) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530494-530497](../../../../../reference/runtime/sand-eval-runner.cjs#L530494-L530497) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:413-416](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L413-L416) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:430902

Calls written directly in this body: `env[computed].trim`.

SHA-256 of the source span: `f6831a46f8faaffe67286dceafd7f6ea0a6a678be166093898c97d39e6674ffe`.

### evaluation:530494

Calls written directly in this body: `env[computed].trim`.

SHA-256 of the source span: `a48bc204a2b46b166b043d0cd59f6f57f7d01fd6943ca0f75c730c928f98e579`.

### state-worker:413

Calls written directly in this body: `env[computed].trim`.

SHA-256 of the source span: `5d0f1cbc143c87a5bddbdf4c1089c9f9d4050569b2fbff891215f65bb86dbb21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
