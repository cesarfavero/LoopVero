# `readerOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/runner-gates.ts` · [Module README](../../../../../modules/core/runner/runner-gates-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530909-530916](../../../../../../reference/runtime/sand-eval-runner.cjs#L530909-L530916) | `FunctionDeclaration` | no | `name18, wiring` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530909-530916](../../../../../../reference/runtime/sand-eval-runner.cjs#L530909-L530916) | 2 | 0 | 0 | 2 | 1 | 0 |

### evaluation:530909

Calls written directly in this body: `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `25c64bffdc6826b5066ea00b8b164dd875b7e29cb144cdc8b6bd136f3676bf4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
