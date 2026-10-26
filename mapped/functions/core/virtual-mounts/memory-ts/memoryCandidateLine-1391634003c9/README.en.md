# `memoryCandidateLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/virtual-mounts/memory.ts` · [Module README](../../../../../modules/core/virtual-mounts/memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769591-769593](../../../../../../reference/runtime/host-main.cjs#L769591-L769593) | `FunctionDeclaration` | no | `candidate` |
| [evaluation:565260-565262](../../../../../../reference/runtime/sand-eval-runner.cjs#L565260-L565262) | `FunctionDeclaration` | no | `candidate` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769591-769593](../../../../../../reference/runtime/host-main.cjs#L769591-L769593) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565260-565262](../../../../../../reference/runtime/sand-eval-runner.cjs#L565260-L565262) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769591

Calls written directly in this body: `candidateLabel`, `formatMemoryDate`.

SHA-256 of the source span: `a99bf6d819cdbfeb4db7108718d02237afbd1cdd1de572ebd146a51288aa2559`.

### evaluation:565260

Calls written directly in this body: `candidateLabel`, `formatMemoryDate`.

SHA-256 of the source span: `a99bf6d819cdbfeb4db7108718d02237afbd1cdd1de572ebd146a51288aa2559`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
