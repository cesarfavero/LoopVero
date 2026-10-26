# `isReadonlySubagentMcpToolAllowed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/readonly-subagent/readonly-subagent-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554043-554046](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554043-L554046) | `FunctionDeclaration` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554043-554046](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554043-L554046) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:554043

Calls written directly in this body: `isDeclaredReadOnlyMcpTool`, `isReadonlyConnectorRead`.

SHA-256 of the source span: `63a0ce910b9a89a84316aa2a06bf9bc91a7423e1d3926631cc402a1c93b04ec1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
