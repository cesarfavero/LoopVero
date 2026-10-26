# `sameRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/frozen-tool-descriptions.ts` · [Module README](../../../../../modules/core/runner/frozen-tool-descriptions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586442-586447](../../../../../../reference/runtime/sand-eval-runner.cjs#L586442-L586447) | `FunctionDeclaration` | no | `a, b2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586442-586447](../../../../../../reference/runtime/sand-eval-runner.cjs#L586442-L586447) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:586442

Calls written directly in this body: `Object.keys`, `leftKeys.every`.

SHA-256 of the source span: `87c0a2302e370f8c82db955912d4c0361b480167f047418b8fea4eeb6b96feca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
