# `readonlyMcpToolIsBlocked`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/readonly-subagent/readonly-subagent-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554047-554058](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554047-L554058) | `FunctionDeclaration` | no | `tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554047-554058](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554047-L554058) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:554047

Calls written directly in this body: `allowed.add`, `isReadonlySubagentMcpToolAllowed`, `new Set`.

SHA-256 of the source span: `236ac3964aee3dfe20fbc630ca5d30df7092570d9d86c68cd042d91fc9ff7ab0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
