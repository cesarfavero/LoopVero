# `redactCodeRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767647-767671](../../../../../../../../reference/runtime/host-main.cjs#L767647-L767671) | `FunctionDeclaration` | no | `run, values, redactLine, hits` |
| [evaluation:563164-563188](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563164-L563188) | `FunctionDeclaration` | no | `run, values, redactLine, hits` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767647-767671](../../../../../../../../reference/runtime/host-main.cjs#L767647-L767671) | 3 | 4 | 0 | 1 | 0 | 0 |
| [evaluation:563164-563188](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563164-L563188) | 3 | 4 | 0 | 1 | 0 | 0 |

### host:767647

Calls written directly in this body: `.join`, `entry.value.toLowerCase`, `hits.push`, `piecesSpellingWhole`, `redactLine`, `run.map`, `run.slice`, `values.short.find`.

Assignment or increment targets: `best`, `start`.

SHA-256 of the source span: `4e6b73f5589e79e361a592310cb046a4c8eac4403e2591cf93c5d34bff7c49c4`.

### evaluation:563164

Calls written directly in this body: `.join`, `entry.value.toLowerCase`, `hits.push`, `piecesSpellingWhole`, `redactLine`, `run.map`, `run.slice`, `values.short.find`.

Assignment or increment targets: `best`, `start`.

SHA-256 of the source span: `4e6b73f5589e79e361a592310cb046a4c8eac4403e2591cf93c5d34bff7c49c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
