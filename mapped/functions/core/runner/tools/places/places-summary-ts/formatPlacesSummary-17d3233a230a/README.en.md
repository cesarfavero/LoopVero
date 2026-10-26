# `formatPlacesSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/tools/places/places-summary.ts` · [Module README](../../../../../../../modules/core/runner/tools/places/places-summary-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768919-768921](../../../../../../../../reference/runtime/host-main.cjs#L768919-L768921) | `FunctionDeclaration` | no | `places, nowMs2` |
| [evaluation:564494-564496](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564494-L564496) | `FunctionDeclaration` | no | `places, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768919-768921](../../../../../../../../reference/runtime/host-main.cjs#L768919-L768921) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564494-564496](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564494-L564496) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768919

Calls written directly in this body: `.join`, `places.map`.

SHA-256 of the source span: `91e1e0c65234a4b0ae61c1d8a4fbe56b11dc588df96dbb598a2a9c6902622e38`.

### evaluation:564494

Calls written directly in this body: `.join`, `places.map`.

SHA-256 of the source span: `6ea7c521b7925778f6e2ddb579beb276569ef2c805dd808524a1fc9f20d2ba9b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
