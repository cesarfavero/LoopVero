# `buildProjectPermissionsContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699362-699398](../../../../../../reference/runtime/host-main.cjs#L699362-L699398) | `FunctionDeclaration` | no | `args` |
| [evaluation:513118-513154](../../../../../../reference/runtime/sand-eval-runner.cjs#L513118-L513154) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699362-699398](../../../../../../reference/runtime/host-main.cjs#L699362-L699398) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:513118-513154](../../../../../../reference/runtime/sand-eval-runner.cjs#L513118-L513154) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:699362

Calls written directly in this body: `appendUnique`, `new Set`.

SHA-256 of the source span: `0a00c9587dc68024b5521307a10c5344202ade963e4e68b9c66aae20479bce97`.

### evaluation:513118

Calls written directly in this body: `appendUnique2`, `new Set`.

SHA-256 of the source span: `0bc6b39709683963b7d823258b6b4b1052e86bc54cc213e239345a705748f13e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
