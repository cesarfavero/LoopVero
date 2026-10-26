# `secureValueStoredKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/secure-values.ts` · [Module README](../../../../../modules/core/ports/secure-values-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724106-724109](../../../../../../reference/runtime/host-main.cjs#L724106-L724109) | `FunctionDeclaration` | no | `value` |
| [evaluation:479395-479398](../../../../../../reference/runtime/sand-eval-runner.cjs#L479395-L479398) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724106-724109](../../../../../../reference/runtime/host-main.cjs#L724106-L724109) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479395-479398](../../../../../../reference/runtime/sand-eval-runner.cjs#L479395-L479398) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724106

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d84b8735ab39c88da98d59ba08ecf6b8d002a588d1d2b5a9526fe01001767e85`.

### evaluation:479395

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d84b8735ab39c88da98d59ba08ecf6b8d002a588d1d2b5a9526fe01001767e85`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
