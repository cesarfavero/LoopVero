# `SandSubagentHostAdapter.sessionEventSequence`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582962-582964](../../../../../../reference/runtime/sand-eval-runner.cjs#L582962-L582964) | `method` | no | `subagentType, lineage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582962-582964](../../../../../../reference/runtime/sand-eval-runner.cjs#L582962-L582964) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582962

Calls written directly in this body: `isComputerUseSubagentType`, `this.actionAuditSequencer.next`.

SHA-256 of the source span: `997a02d8ee67523115928d94dbc1aec6fb699a3ec097c334bab92fa8fbb590b1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
