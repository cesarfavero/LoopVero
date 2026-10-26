# `themesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-sort-memories-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754224-754233](../../../../../../../reference/runtime/host-main.cjs#L754224-L754233) | `FunctionDeclaration` | no | `named2` |
| [evaluation:536692-536701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536692-L536701) | `FunctionDeclaration` | no | `named2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754224-754233](../../../../../../../reference/runtime/host-main.cjs#L754224-L754233) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:536692-536701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536692-L536701) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:754224

Calls written directly in this body: `new Map`, `spellings.has`, `spellings.set`, `theme.toLowerCase`.

SHA-256 of the source span: `ae003c1e190f94cc93c59e53e236f218c7c115fc3c67e5b3c0646993641bc05e`.

### evaluation:536692

Calls written directly in this body: `new Map`, `spellings.has`, `spellings.set`, `theme.toLowerCase`.

SHA-256 of the source span: `ae003c1e190f94cc93c59e53e236f218c7c115fc3c67e5b3c0646993641bc05e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
