# `memoryStateArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771655-771685](../../../../../../../../reference/runtime/host-main.cjs#L771655-L771685) | `FunctionDeclaration` | no | `args, deps, memoryTypes` |
| [evaluation:570888-570918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570888-L570918) | `FunctionDeclaration` | no | `args, deps, memoryTypes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771655-771685](../../../../../../../../reference/runtime/host-main.cjs#L771655-L771685) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:570888-570918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570888-L570918) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:771655

Calls written directly in this body: `isTeamBot`, `memoryTypeTarget`, `memoryTypes.find`.

SHA-256 of the source span: `1b39eb01b9c645a21c6cb48fb9408238680ad3482208810c0bd36d1ece19f5d0`.

### evaluation:570888

Calls written directly in this body: `isTeamBot`, `memoryTypeTarget`, `memoryTypes.find`.

SHA-256 of the source span: `1b39eb01b9c645a21c6cb48fb9408238680ad3482208810c0bd36d1ece19f5d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
