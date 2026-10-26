# `isPlaceList`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707855-707857](../../../../../../reference/runtime/host-main.cjs#L707855-L707857) | `FunctionDeclaration` | no | `value` |
| [evaluation:564342-564344](../../../../../../reference/runtime/sand-eval-runner.cjs#L564342-L564344) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707855-707857](../../../../../../reference/runtime/host-main.cjs#L707855-L707857) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564342-564344](../../../../../../reference/runtime/sand-eval-runner.cjs#L564342-L564344) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707855

Calls written directly in this body: `Array.isArray`, `value.every`.

SHA-256 of the source span: `dcc80f11cb79770da4bc8916d9e488261f1527aae13b9833baf2f5cbf5973141`.

### evaluation:564342

Calls written directly in this body: `Array.isArray`, `value.every`.

SHA-256 of the source span: `dcc80f11cb79770da4bc8916d9e488261f1527aae13b9833baf2f5cbf5973141`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
