# `parseShellTerminalStartedAtMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490482-490487](../../../../../../reference/runtime/sand-eval-runner.cjs#L490482-L490487) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490482-490487](../../../../../../reference/runtime/sand-eval-runner.cjs#L490482-L490487) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490482

Calls written directly in this body: `Date.parse`, `Number.isFinite`, `[computed].trim`, `content.match`, `header.match`.

SHA-256 of the source span: `046c8e0aac8565b38286df7c7e44e2c4270724e9d8d27093c27908d129936dd9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
