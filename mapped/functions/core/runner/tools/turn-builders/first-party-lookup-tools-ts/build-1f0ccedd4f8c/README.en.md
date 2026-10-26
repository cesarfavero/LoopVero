# `build`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/first-party-lookup-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/first-party-lookup-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:578911-578952](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578911-L578952) | `ArrowFunctionExpression` | no | `{ host, props, decisions, dynamicToolRegistry, mcpMetaToolNames }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:578911-578952](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578911-L578952) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:578911

Calls written directly in this body: `createCallMcpTool`, `createGetMcpToolsTool`, `createSandMcpMetaToolOptions`, `describedAs`.

SHA-256 of the source span: `ab6d78a4880dad1e6b8f97d829b2507ad8f2c197c0b53a88be6b76393f784429`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
