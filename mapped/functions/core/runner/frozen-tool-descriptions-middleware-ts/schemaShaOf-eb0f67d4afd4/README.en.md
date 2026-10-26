# `schemaShaOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/frozen-tool-descriptions-middleware.ts` · [Module README](../../../../../modules/core/runner/frozen-tool-descriptions-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586582-586596](../../../../../../reference/runtime/sand-eval-runner.cjs#L586582-L586596) | `FunctionDeclaration` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586582-586596](../../../../../../reference/runtime/sand-eval-runner.cjs#L586582-L586596) | 2 | 0 | 0 | 3 | 0 | 1 |

### evaluation:586582

Calls written directly in this body: `JSON.stringify`, `isUnknownRecord2`, `schemaShaByParameters.get`, `schemaShaByParameters.set`, `sha256HexOfText`.

Assignment or increment targets: `serialized`.

SHA-256 of the source span: `a2bf2891235c13aabd85fd59684fda2d485227a5603bf3eee39321b0f8f8140f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
