# `placeBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/tools/places/places-summary.ts` · [Module README](../../../../../../../modules/core/runner/tools/places/places-summary-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768909-768918](../../../../../../../../reference/runtime/host-main.cjs#L768909-L768918) | `FunctionDeclaration` | no | `place, nowMs2` |
| [evaluation:564484-564493](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564484-L564493) | `FunctionDeclaration` | no | `place, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768909-768918](../../../../../../../../reference/runtime/host-main.cjs#L768909-L768918) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564484-564493](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564484-L564493) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:768909

Calls written directly in this body: `.filter`, `.join`, `openingHoursLines`, `ratingLine`.

SHA-256 of the source span: `114f9bf132593f21b8dfc262280a9e4c356522279f7879409f9c56e0062c6035`.

### evaluation:564484

Calls written directly in this body: `.filter`, `.join`, `openingHoursLines`, `ratingLine`.

SHA-256 of the source span: `75cddf7322fb26e072dcb33bb67fbac9498b891c06325ebf2c74d08683e85dd9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
