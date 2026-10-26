# `openingStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/tools/places/places-summary.ts` · [Module README](../../../../../../../modules/core/runner/tools/places/places-summary-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768881-768894](../../../../../../../../reference/runtime/host-main.cjs#L768881-L768894) | `FunctionDeclaration` | no | `place, nowMs2` |
| [evaluation:564456-564469](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564456-L564469) | `FunctionDeclaration` | no | `place, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768881-768894](../../../../../../../../reference/runtime/host-main.cjs#L768881-L768894) | 6 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:564456-564469](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564456-L564469) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:768881

Calls written directly in this body: `wallClockAtPlaceOrUtc`.

SHA-256 of the source span: `9a27a5a527ec6b152e7cf65bef69e1a775f7c75c6ca39a618be5d7c2188f9aed`.

### evaluation:564456

Calls written directly in this body: `wallClockAtPlaceOrUtc`.

SHA-256 of the source span: `f39bc7056199ab782aaeea3229c23ea45a4bd56392dfada894874c66b1cfe638`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
