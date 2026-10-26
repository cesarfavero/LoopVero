# `setProfile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771856-771879](../../../../../../../../reference/runtime/host-main.cjs#L771856-L771879) | `FunctionDeclaration` | yes | `ctx, args, deps` |
| [evaluation:571089-571112](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571089-L571112) | `FunctionDeclaration` | yes | `ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771856-771879](../../../../../../../../reference/runtime/host-main.cjs#L771856-L771879) | 4 | 0 | 2 | 3 | 0 | 0 |
| [evaluation:571089-571112](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571089-L571112) | 4 | 0 | 2 | 3 | 0 | 0 |

### host:771856

Calls written directly in this body: `.join`, `executeStateUpdate`, `renderOutcome`, `results.join`, `results.push`.

SHA-256 of the source span: `d4c0107086970263b6d485a947de1577289077377339958934be1cdfd1f6db8d`.

### evaluation:571089

Calls written directly in this body: `.join`, `executeStateUpdate`, `renderOutcome`, `results.join`, `results.push`.

SHA-256 of the source span: `d4c0107086970263b6d485a947de1577289077377339958934be1cdfd1f6db8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
