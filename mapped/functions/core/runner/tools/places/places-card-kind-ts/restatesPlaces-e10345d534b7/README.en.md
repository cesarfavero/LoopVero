# `restatesPlaces`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/places/places-card-kind.ts` · [Module README](../../../../../../../modules/core/runner/tools/places/places-card-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768813-768819](../../../../../../../../reference/runtime/host-main.cjs#L768813-L768819) | `FunctionDeclaration` | no | `prose, places` |
| [evaluation:564388-564394](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564388-L564394) | `FunctionDeclaration` | no | `prose, places` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768813-768819](../../../../../../../../reference/runtime/host-main.cjs#L768813-L768819) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564388-564394](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564388-L564394) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768813

Calls written directly in this body: `.some`, `contactDetailsOf`, `findNamedItemsRepetition`, `hrefsOf`, `places.map`, `prose.toLowerCase`.

SHA-256 of the source span: `7e51ce9edc016c86ba22072f2686df22d313b540a5d6a44109f5977e973c40c3`.

### evaluation:564388

Calls written directly in this body: `.some`, `contactDetailsOf`, `findNamedItemsRepetition`, `hrefsOf`, `places.map`, `prose.toLowerCase`.

SHA-256 of the source span: `7e51ce9edc016c86ba22072f2686df22d313b540a5d6a44109f5977e973c40c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
