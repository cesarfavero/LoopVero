# `parseMemoryProvenanceLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-file-format.ts` · [Module README](../../../../../modules/core/runner/memory-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702767-702779](../../../../../../reference/runtime/host-main.cjs#L702767-L702779) | `FunctionDeclaration` | no | `line` |
| [evaluation:536511-536523](../../../../../../reference/runtime/sand-eval-runner.cjs#L536511-L536523) | `FunctionDeclaration` | no | `line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702767-702779](../../../../../../reference/runtime/host-main.cjs#L702767-L702779) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:536511-536523](../../../../../../reference/runtime/sand-eval-runner.cjs#L536511-L536523) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:702767

Calls written directly in this body: `MEMORY_PROVENANCE_LINE.exec`, `MEMORY_TURN_ID.test`, `isMemorySource`.

SHA-256 of the source span: `8128c936be5418d3f700fcbe9291e4db9042c31284729418082114df5efbbe62`.

### evaluation:536511

Calls written directly in this body: `MEMORY_PROVENANCE_LINE.exec`, `MEMORY_TURN_ID.test`, `isMemorySource`.

SHA-256 of the source span: `8128c936be5418d3f700fcbe9291e4db9042c31284729418082114df5efbbe62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
