# `withReadonlySubagentRefusals`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/readonly-subagent/readonly-subagent-refusals.ts` · [Module README](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-refusals-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582552-582576](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582552-L582576) | `FunctionDeclaration` | no | `listed, withheld, dropped` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582552-582576](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582552-L582576) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:582552

Calls written directly in this body: `dropped.map`, `listed.find`, `listed.map`, `new Map`, `new Set`, `withheld.filter`.

SHA-256 of the source span: `c3cc5a3b61256fd7f5c68b08e7a6d98a54341559b4e0b901110dd579485d9c77`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
