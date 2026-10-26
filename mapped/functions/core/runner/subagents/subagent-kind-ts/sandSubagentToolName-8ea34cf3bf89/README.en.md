# `sandSubagentToolName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-kind.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740872-740874](../../../../../../../reference/runtime/host-main.cjs#L740872-L740874) | `FunctionDeclaration` | no | `host` |
| [evaluation:479782-479784](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479782-L479784) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740872-740874](../../../../../../../reference/runtime/host-main.cjs#L740872-L740874) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479782-479784](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479782-L479784) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:740872

Calls written directly in this body: `host.gates.tasks`.

SHA-256 of the source span: `c77733458e5b3137be238b48e573f73f26a4da529273fb1aa7390b6191098ab8`.

### evaluation:479782

Calls written directly in this body: `host.gates.tasks`.

SHA-256 of the source span: `c77733458e5b3137be238b48e573f73f26a4da529273fb1aa7390b6191098ab8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
