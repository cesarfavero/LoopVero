# `computeSandComputerPageStateIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699291-699302](../../../../../../reference/runtime/host-main.cjs#L699291-L699302) | `FunctionDeclaration` | no | `stdout` |
| [evaluation:513047-513058](../../../../../../reference/runtime/sand-eval-runner.cjs#L513047-L513058) | `FunctionDeclaration` | no | `stdout` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699291-699302](../../../../../../reference/runtime/host-main.cjs#L699291-L699302) | 4 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:513047-513058](../../../../../../reference/runtime/sand-eval-runner.cjs#L513047-L513058) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:699291

Calls written directly in this body: `.digest`, `.update`, `lines2.join`, `lines2.push`, `lines2.sort`, `parseNavigationProbeOutput`, `rawUrl.trim`.

SHA-256 of the source span: `09a8525cf1d3221325a4d361be2313fc899ab33de8eacec7d7c5bd64d96ed984`.

### evaluation:513047

Calls written directly in this body: `.digest`, `.update`, `lines2.join`, `lines2.push`, `lines2.sort`, `parseNavigationProbeOutput`, `rawUrl.trim`.

SHA-256 of the source span: `d6ab4a19d614e3a2cbf878ccd61bc2e76619a958c6da103a369b629f3c0935db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
