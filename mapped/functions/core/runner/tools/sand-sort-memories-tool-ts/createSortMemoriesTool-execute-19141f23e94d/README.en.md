# `createSortMemoriesTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-sort-memories-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754307-754408](../../../../../../../reference/runtime/host-main.cjs#L754307-L754408) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:536775-536876](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536775-L536876) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754307-754408](../../../../../../../reference/runtime/host-main.cjs#L754307-L754408) | 23 | 0 | 3 | 13 | 0 | 0 |
| [evaluation:536775-536876](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536775-L536876) | 23 | 0 | 3 | 13 | 0 | 0 |

### host:754307

Calls written directly in this body: `.filter`, `.join`, `Date.now`, `annotated`, `args.toTeam.map`, `bucketLine`, `d.isAwaitingUserSelection`, `d.memoryScopes`, `d.onSendMessage`, `later.found.filter`, `missing.map`, `move`, `new Set`, `privateSide.listMemories`, `promote.found.map`, `resolve30`, `sink`, `sortMemoriesConfirmationCode`, `summary.join`, `themesOf`.

SHA-256 of the source span: `c2dfa0dbf4185a1f2804ff08025777b994552f69f90790f010f381169c0051a3`.

### evaluation:536775

Calls written directly in this body: `.filter`, `.join`, `Date.now`, `annotated`, `args.toTeam.map`, `bucketLine`, `d.isAwaitingUserSelection`, `d.memoryScopes`, `d.onSendMessage`, `later.found.filter`, `missing.map`, `move`, `new Set`, `privateSide.listMemories`, `promote.found.map`, `resolve6`, `sink`, `sortMemoriesConfirmationCode`, `summary.join`, `themesOf`.

SHA-256 of the source span: `43223ce8ce7e28ebed56fc158972045b3e74d79603fb5d5f0e1edb3fc7c9c93f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
