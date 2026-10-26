# `canonicalJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/connector-scope/connector-scope.ts` · [Module README](../../../../../../modules/core/runner/connector-scope/connector-scope-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525815-525822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525815-L525822) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525815-525822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525815-L525822) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:525815

Calls written directly in this body: `.join`, `.map`, `.sort`, `Array.isArray`, `JSON.stringify`, `Object.keys`, `fields3.join`, `isUnknownRecord2`, `value.map`.

SHA-256 of the source span: `8b9786c27fc056f1cc3572cb4898c6438436f0146317ebde9a4be6e3e08712dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
