# `readonlySubagentConnectorKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/readonly-subagent/readonly-subagent-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554017-554025](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554017-L554025) | `FunctionDeclaration` | no | `serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554017-554025](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554017-L554025) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:554017

Calls written directly in this body: `.replace`, `.toLowerCase`, `MCP_SERVER_IDENTIFIER_SCOPE.exec`, `bare.endsWith`, `bare.slice`, `row.slice`, `serverIdentifier.lastIndexOf`, `serverIdentifier.slice`, `withoutMint.trim`.

SHA-256 of the source span: `d4c60c3e88079c48aa0a0eeabf75f419424dcfd27e0c8a1ce32373b36dab037f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
