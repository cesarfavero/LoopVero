# `annotated`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-sort-memories-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754207-754223](../../../../../../../reference/runtime/host-main.cjs#L754207-L754223) | `FunctionDeclaration` | no | `found, named2` |
| [evaluation:536675-536691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536675-L536691) | `FunctionDeclaration` | no | `found, named2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754207-754223](../../../../../../../reference/runtime/host-main.cjs#L754207-L754223) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536675-536691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536675-L536691) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754207

Calls written directly in this body: `found.map`, `named2.flatMap`, `new Map`, `themesOf`.

SHA-256 of the source span: `48d6641af2a1b46c45a6ed6ea4db233a048d195a2f89d2b1013f28a314b3aa57`.

### evaluation:536675

Calls written directly in this body: `found.map`, `named2.flatMap`, `new Map`, `themesOf`.

SHA-256 of the source span: `65bc5ecff827ed811ea522f5bfb5ea7645705e2ca4f7a5e9cb498133faaa1341`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
