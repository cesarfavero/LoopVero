# `notesChange2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-write-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-write-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759341-759343](../../../../../../reference/runtime/host-main.cjs#L759341-L759343) | `FunctionDeclaration` | no | `notes` |
| [evaluation:549501-549503](../../../../../../reference/runtime/sand-eval-runner.cjs#L549501-L549503) | `FunctionDeclaration` | no | `notes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759341-759343](../../../../../../reference/runtime/host-main.cjs#L759341-L759343) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549501-549503](../../../../../../reference/runtime/sand-eval-runner.cjs#L549501-L549503) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:759341

Calls written directly in this body: `isBlank`.

SHA-256 of the source span: `fe40d5b815d678ea371f794038be5ece89f13e6e25f832e0f5770da846f61b07`.

### evaluation:549501

Calls written directly in this body: `isBlank`.

SHA-256 of the source span: `fe40d5b815d678ea371f794038be5ece89f13e6e25f832e0f5770da846f61b07`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
