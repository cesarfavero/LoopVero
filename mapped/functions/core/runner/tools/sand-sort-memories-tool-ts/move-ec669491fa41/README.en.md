# `move`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-sort-memories-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754267-754297](../../../../../../../reference/runtime/host-main.cjs#L754267-L754297) | `FunctionDeclaration` | yes | `{   records: records2,   from: from2,   to: to3 }` |
| [evaluation:536735-536765](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536735-L536765) | `FunctionDeclaration` | yes | `{   records: records2,   from: from2,   to: to3 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754267-754297](../../../../../../../reference/runtime/host-main.cjs#L754267-L754297) | 1 | 2 | 2 | 3 | 0 | 2 |
| [evaluation:536735-536765](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536735-L536765) | 1 | 2 | 2 | 3 | 0 | 2 |

### host:754267

Calls written directly in this body: `.map`, `copied.push`, `errorMessage`, `from2.flush`, `from2.removeMemoryByContent`, `held.has`, `new Set`, `to3.addMemory`, `to3.flush`, `to3.listMemories`.

SHA-256 of the source span: `9f2b30d523bee9909d93b5456b71077e3f3ba6572c10a84be55bbd100e9cca6f`.

### evaluation:536735

Calls written directly in this body: `.map`, `copied.push`, `errorMessage2`, `from2.flush`, `from2.removeMemoryByContent`, `held.has`, `new Set`, `to3.addMemory`, `to3.flush`, `to3.listMemories`.

SHA-256 of the source span: `156bcf139c09c9bbca4fcd03fb163d2bce268fa354c894b7884e58f0b93b4067`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
