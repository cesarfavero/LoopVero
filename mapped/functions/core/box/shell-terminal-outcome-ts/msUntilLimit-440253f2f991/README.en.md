# `msUntilLimit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shell-terminal-outcome.ts` · [Module README](../../../../../modules/core/box/shell-terminal-outcome-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:590253-590255](../../../../../../reference/runtime/host-main.cjs#L590253-L590255) | `FunctionDeclaration` | no | `{ startedAtMs, limitMs }` |
| [evaluation:529976-529978](../../../../../../reference/runtime/sand-eval-runner.cjs#L529976-L529978) | `FunctionDeclaration` | no | `{ startedAtMs, limitMs }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590253-590255](../../../../../../reference/runtime/host-main.cjs#L590253-L590255) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:529976-529978](../../../../../../reference/runtime/sand-eval-runner.cjs#L529976-L529978) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:590253

Calls written directly in this body: `Date.now`, `Math.max`.

SHA-256 of the source span: `f1997ebe549f43c03c9a04647f042d38ed2e4b2cf6fdf2f17c7d0cb38c325dcd`.

### evaluation:529976

Calls written directly in this body: `Date.now`, `Math.max`.

SHA-256 of the source span: `f1997ebe549f43c03c9a04647f042d38ed2e4b2cf6fdf2f17c7d0cb38c325dcd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
