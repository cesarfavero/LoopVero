# `profileServerIdFromJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-files.ts` · [Module README](../../../../../modules/core/agents/agent-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490823-490827](../../../../../../reference/runtime/host-main.cjs#L490823-L490827) | `FunctionDeclaration` | no | `parsed2` |
| [evaluation:629034-629038](../../../../../../reference/runtime/sand-eval-runner.cjs#L629034-L629038) | `FunctionDeclaration` | no | `parsed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490823-490827](../../../../../../reference/runtime/host-main.cjs#L490823-L490827) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:629034-629038](../../../../../../reference/runtime/sand-eval-runner.cjs#L629034-L629038) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:490823

Calls written directly in this body: `parsed2.serverId.trim`.

SHA-256 of the source span: `ffedd2ecadba9a8ee262499bf91678beb4175042e290b702b9efb10467362312`.

### evaluation:629034

Calls written directly in this body: `parsed.serverId.trim`.

SHA-256 of the source span: `9170bec1e3a696c8dc5e12c14d7447f05769bd76cc0b7621cbb5e8a9e068b495`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
