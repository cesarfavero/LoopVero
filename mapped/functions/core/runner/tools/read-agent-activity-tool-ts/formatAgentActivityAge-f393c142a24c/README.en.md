# `formatAgentActivityAge`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-agent-activity-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-agent-activity-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765396-765402](../../../../../../../reference/runtime/host-main.cjs#L765396-L765402) | `FunctionDeclaration` | no | `iso, nowMs2` |
| [evaluation:558763-558769](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558763-L558769) | `FunctionDeclaration` | no | `iso, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765396-765402](../../../../../../../reference/runtime/host-main.cjs#L765396-L765402) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:558763-558769](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558763-L558769) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:765396

Calls written directly in this body: `Date.parse`, `Number.isNaN`, `formatDurationMs`.

SHA-256 of the source span: `b75ae3d972a9254544cb5eb705282ca5d1743f42e769fb20679f067acaf9a696`.

### evaluation:558763

Calls written directly in this body: `Date.parse`, `Number.isNaN`, `formatDurationMs`.

SHA-256 of the source span: `ca46ae522810a287d15b7df94b6a160e97f4257f2f0d54d49fc3db480310828e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
