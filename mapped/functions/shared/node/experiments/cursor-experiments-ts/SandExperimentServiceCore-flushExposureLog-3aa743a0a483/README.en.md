# `SandExperimentServiceCore.flushExposureLog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553176-553187](../../../../../../../reference/runtime/host-main.cjs#L553176-L553187) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553176-553187](../../../../../../../reference/runtime/host-main.cjs#L553176-L553187) | 1 | 0 | 1 | 1 | 0 | 1 |

### host:553176

Calls written directly in this body: `client.flush`, `errorLogTag`, `reportExperimentsDiagnostic`.

SHA-256 of the source span: `d06facf2b06b60df9baac43e1eb1abc56697dc94bfd5f5988ae23cfbe353e9b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
