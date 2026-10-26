# `normalizeSandComputerExactActionArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699322-699336](../../../../../../reference/runtime/host-main.cjs#L699322-L699336) | `FunctionDeclaration` | no | `raw` |
| [evaluation:513078-513092](../../../../../../reference/runtime/sand-eval-runner.cjs#L513078-L513092) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699322-699336](../../../../../../reference/runtime/host-main.cjs#L699322-L699336) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513078-513092](../../../../../../reference/runtime/sand-eval-runner.cjs#L513078-L513092) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:699322

Calls written directly in this body: `rejectOversizedField`.

SHA-256 of the source span: `e8598251b6c7347e1d221d65d97437a0cba80f3c704e2809207f2a0dec5a3a45`.

### evaluation:513078

Calls written directly in this body: `rejectOversizedField`.

SHA-256 of the source span: `e8598251b6c7347e1d221d65d97437a0cba80f3c704e2809207f2a0dec5a3a45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
