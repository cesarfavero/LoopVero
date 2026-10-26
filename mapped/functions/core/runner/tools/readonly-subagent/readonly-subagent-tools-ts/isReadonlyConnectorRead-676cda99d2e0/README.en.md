# `isReadonlyConnectorRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/readonly-subagent/readonly-subagent-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554026-554030](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554026-L554030) | `FunctionDeclaration` | no | `serverIdentifier, toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554026-554030](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554026-L554030) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:554026

Calls written directly in this body: `.has`, `READONLY_CONNECTOR_READ_SETS.get`, `readonlySubagentConnectorKey`.

SHA-256 of the source span: `0d3b4e58064b7dc499973ccda43d62f2dafda249974add847db1c987514922ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
