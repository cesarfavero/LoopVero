# `isoTimeOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-connected-activity-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763695-763697](../../../../../../../reference/runtime/host-main.cjs#L763695-L763697) | `FunctionDeclaration` | no | `ms2` |
| [evaluation:556743-556745](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556743-L556745) | `FunctionDeclaration` | no | `ms2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763695-763697](../../../../../../../reference/runtime/host-main.cjs#L763695-L763697) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556743-556745](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556743-L556745) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:763695

Calls written directly in this body: `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 of the source span: `d13eb36faa726388776a9c360454cb0aadcfcd37b276833dd518496263a2b849`.

### evaluation:556743

Calls written directly in this body: `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 of the source span: `d13eb36faa726388776a9c360454cb0aadcfcd37b276833dd518496263a2b849`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
