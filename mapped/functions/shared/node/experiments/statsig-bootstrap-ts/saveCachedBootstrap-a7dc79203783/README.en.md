# `saveCachedBootstrap`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/statsig-bootstrap.ts` · [Module README](../../../../../../modules/shared/node/experiments/statsig-bootstrap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552492-552503](../../../../../../../reference/runtime/host-main.cjs#L552492-L552503) | `FunctionDeclaration` | yes | `cacheDir, cache3, write4 = writeFileAtomic` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552492-552503](../../../../../../../reference/runtime/host-main.cjs#L552492-L552503) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:552492

Calls written directly in this body: `JSON.stringify`, `bootstrapCachePath`, `errorLogTag`, `reportExperimentsDiagnostic`, `write4`.

SHA-256 of the source span: `f836172996c30fc666173cb3011f1b22e17888d6f039505ec80a590ac96964f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
