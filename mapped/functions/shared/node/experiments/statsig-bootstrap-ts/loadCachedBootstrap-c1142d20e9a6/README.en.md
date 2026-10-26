# `loadCachedBootstrap`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/statsig-bootstrap.ts` · [Module README](../../../../../../modules/shared/node/experiments/statsig-bootstrap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552464-552491](../../../../../../../reference/runtime/host-main.cjs#L552464-L552491) | `FunctionDeclaration` | no | `cacheDir, read2 = readUtf8` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552464-552491](../../../../../../../reference/runtime/host-main.cjs#L552464-L552491) | 7 | 0 | 0 | 5 | 0 | 1 |

### host:552464

Calls written directly in this body: `JSON.parse`, `Number.isFinite`, `bootstrapCachePath`, `errorLogTag`, `read2`, `reportExperimentsDiagnostic`.

SHA-256 of the source span: `304a0d0495aacbbd70a2b617da8668a1570393cb8aca1447e2a5eeed57175a24`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
