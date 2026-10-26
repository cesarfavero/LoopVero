# `openingHoursLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/tools/places/places-summary.ts` · [Module README](../../../../../../../modules/core/runner/tools/places/places-summary-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768895-768903](../../../../../../../../reference/runtime/host-main.cjs#L768895-L768903) | `FunctionDeclaration` | no | `place, nowMs2` |
| [evaluation:564470-564478](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564470-L564478) | `FunctionDeclaration` | no | `place, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768895-768903](../../../../../../../../reference/runtime/host-main.cjs#L768895-L768903) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:564470-564478](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564470-L564478) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:768895

Calls written directly in this body: `.filter`, `lines2.map`, `openingStatus`.

SHA-256 of the source span: `23b8c517a06ccd388bc89b84cc3f7b9fd6563a855e74d866afb942c23d0aabe8`.

### evaluation:564470

Calls written directly in this body: `.filter`, `lines2.map`, `openingStatus`.

SHA-256 of the source span: `2ab7e8506fa0e39b6322c68188fdb9b4e3bb346121eb75cafa02be6310656f87`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
