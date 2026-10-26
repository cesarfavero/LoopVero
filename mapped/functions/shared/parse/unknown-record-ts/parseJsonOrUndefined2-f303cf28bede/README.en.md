# `parseJsonOrUndefined2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/parse/unknown-record.ts` · [Module README](../../../../../modules/shared/parse/unknown-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479647-479655](../../../../../../reference/runtime/sand-eval-runner.cjs#L479647-L479655) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479647-479655](../../../../../../reference/runtime/sand-eval-runner.cjs#L479647-L479655) | 0 | 0 | 0 | 1 | 0 | 1 |

### evaluation:479647

Calls written directly in this body: `JSON.parse`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `631752b040a9234e6a9960be359806db9e2f000ca46ceca7a2c3a4f781b24913`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
