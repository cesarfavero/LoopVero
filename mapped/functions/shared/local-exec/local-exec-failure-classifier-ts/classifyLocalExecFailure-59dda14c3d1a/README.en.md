# `classifyLocalExecFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/local-exec/local-exec-failure-classifier.ts` · [Module README](../../../../../modules/shared/local-exec/local-exec-failure-classifier-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226145-226150](../../../../../../reference/runtime/host-main.cjs#L226145-L226150) | `FunctionDeclaration` | no | `message` |
| [evaluation:479034-479039](../../../../../../reference/runtime/sand-eval-runner.cjs#L479034-L479039) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226145-226150](../../../../../../reference/runtime/host-main.cjs#L226145-L226150) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479034-479039](../../../../../../reference/runtime/sand-eval-runner.cjs#L479034-L479039) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:226145

Calls written directly in this body: `/\bspawn(?:Sync)?\b/i.test`, `ERRNO_TOKEN.exec`, `brandedErrno`, `spawnErrorClass`.

SHA-256 of the source span: `b158e9e8acc3404cc9b4860cb339b101105c7a315744f3c55466b52baffb1d37`.

### evaluation:479034

Calls written directly in this body: `/\bspawn(?:Sync)?\b/i.test`, `ERRNO_TOKEN.exec`, `brandedErrno`, `spawnErrorClass`.

SHA-256 of the source span: `b158e9e8acc3404cc9b4860cb339b101105c7a315744f3c55466b52baffb1d37`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
