# `createTurnAgentComposition`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-agent-composition.ts` · [Module README](../../../../../modules/core/runner/turn-agent-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588061-588521](../../../../../../reference/runtime/sand-eval-runner.cjs#L588061-L588521) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588061-588521](../../../../../../reference/runtime/sand-eval-runner.cjs#L588061-L588521) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588061

Calls written directly in this body: `answeredByFirstPartyToolMock`, `createAutomationSubagentDispatch`, `createSubagentRunnerFactory`, `new Set`, `resolveSandTurnToolDecisions`.

SHA-256 of the source span: `9da056755e1f6d3feb10b972c7d394b7f71f6ea06fa5a8849f709fabd845f593`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
