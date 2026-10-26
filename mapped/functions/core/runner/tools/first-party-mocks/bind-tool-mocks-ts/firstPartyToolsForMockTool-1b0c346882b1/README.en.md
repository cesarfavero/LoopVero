# `firstPartyToolsForMockTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [Module README](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555821-555833](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555821-L555833) | `FunctionDeclaration` | no | `mockTool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555821-555833](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555821-L555833) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:555821

Calls written directly in this body: `OLDER_TOOL_NAMES.get`, `SAND_EVAL_NEVER_FORWARDED_TOOL_NAMES.has`, `SPLIT_STATE_TOOL_ARGS.flatMap`, `isLegacyStateToolName`, `new Map`.

SHA-256 of the source span: `f022c595ee9e83aa4bedd02255a74c487d6517cc58e7d904ec505a65854497eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
