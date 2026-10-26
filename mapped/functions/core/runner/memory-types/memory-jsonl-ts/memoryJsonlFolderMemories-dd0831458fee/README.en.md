# `memoryJsonlFolderMemories`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-jsonl.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-jsonl-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754622-754630](../../../../../../../reference/runtime/host-main.cjs#L754622-L754630) | `FunctionDeclaration` | no | `files` |
| [evaluation:537589-537597](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537589-L537597) | `FunctionDeclaration` | no | `files` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754622-754630](../../../../../../../reference/runtime/host-main.cjs#L754622-L754630) | 1 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:537589-537597](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537589-L537597) | 1 | 2 | 0 | 1 | 0 | 0 |

### host:754622

Calls written directly in this body: `out.push`, `parseMemoryJsonlFile`.

SHA-256 of the source span: `86ae9e9b72b4738dc2e472766e626eebe4002582b343342a9ba3b940bc7e2f2f`.

### evaluation:537589

Calls written directly in this body: `out.push`, `parseMemoryJsonlFile`.

SHA-256 of the source span: `86ae9e9b72b4738dc2e472766e626eebe4002582b343342a9ba3b940bc7e2f2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
