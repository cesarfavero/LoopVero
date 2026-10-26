# `wallClockAtPlaceOrUtc`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/tools/places/places-summary.ts` · [Module README](../../../../../../../modules/core/runner/tools/places/places-summary-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768870-768880](../../../../../../../../reference/runtime/host-main.cjs#L768870-L768880) | `FunctionDeclaration` | no | `{   utcOffsetMinutes,   timeMs }` |
| [evaluation:564445-564455](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564445-L564455) | `FunctionDeclaration` | no | `{   utcOffsetMinutes,   timeMs }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768870-768880](../../../../../../../../reference/runtime/host-main.cjs#L768870-L768880) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564445-564455](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564445-L564455) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:768870

Calls written directly in this body: `.padStart`, `String`, `new Date`, `shifted.getUTCDay`, `shifted.getUTCHours`, `shifted.getUTCMinutes`.

SHA-256 of the source span: `851216dd6339464ce6354cbb4a07ce7c0f8fbc614e129c5557e5f08d9f5b71d5`.

### evaluation:564445

Calls written directly in this body: `.padStart`, `String`, `new Date`, `shifted.getUTCDay`, `shifted.getUTCHours`, `shifted.getUTCMinutes`.

SHA-256 of the source span: `851216dd6339464ce6354cbb4a07ce7c0f8fbc614e129c5557e5f08d9f5b71d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
