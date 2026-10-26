# `memoryFolderFacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-folders.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-folders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754693-754713](../../../../../../../reference/runtime/host-main.cjs#L754693-L754713) | `FunctionDeclaration` | no | `folders, memoryTypes` |
| [evaluation:537660-537680](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537660-L537680) | `FunctionDeclaration` | no | `folders, memoryTypes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754693-754713](../../../../../../../reference/runtime/host-main.cjs#L754693-L754713) | 2 | 2 | 0 | 2 | 0 | 0 |
| [evaluation:537660-537680](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537660-L537680) | 2 | 2 | 0 | 2 | 0 | 0 |

### host:754693

Calls written directly in this body: `.map`, `byName3.get`, `facts.push`, `facts.sort`, `folderMemoryTypes`, `memoryFolderModelPath`, `memoryJsonlFolderMemories`, `new Map`, `parsedTime`.

SHA-256 of the source span: `c673bee863950bbfe3f503f76f5aa2604f6d4f06be0cd11e66b73e6505c3c23c`.

### evaluation:537660

Calls written directly in this body: `.map`, `byName2.get`, `facts.push`, `facts.sort`, `folderMemoryTypes`, `memoryFolderModelPath`, `memoryJsonlFolderMemories`, `new Map`, `parsedTime`.

SHA-256 of the source span: `73fc9b8182328cd62e03bff3da3e911642eaf020bd087abf0ffea94c316c5e6b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
