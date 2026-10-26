# `offeredMemoryTypes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771606-771608](../../../../../../../../reference/runtime/host-main.cjs#L771606-L771608) | `FunctionDeclaration` | no | `memoryTypes, teamBot` |
| [evaluation:570839-570841](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570839-L570841) | `FunctionDeclaration` | no | `memoryTypes, teamBot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771606-771608](../../../../../../../../reference/runtime/host-main.cjs#L771606-L771608) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570839-570841](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570839-L570841) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771606

Calls written directly in this body: `memoryTypes.filter`.

SHA-256 of the source span: `82fd0d724438e8a0e749feac953f53fcf35fdff48d4309693b27fd5500547eee`.

### evaluation:570839

Calls written directly in this body: `memoryTypes.filter`.

SHA-256 of the source span: `82fd0d724438e8a0e749feac953f53fcf35fdff48d4309693b27fd5500547eee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
