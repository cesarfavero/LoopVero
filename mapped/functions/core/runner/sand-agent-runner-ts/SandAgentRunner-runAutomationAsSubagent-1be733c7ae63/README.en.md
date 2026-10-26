# `_SandAgentRunner.runAutomationAsSubagent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593800-593802](../../../../../../reference/runtime/sand-eval-runner.cjs#L593800-L593802) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593800-593802](../../../../../../reference/runtime/sand-eval-runner.cjs#L593800-L593802) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:593800

Calls written directly in this body: `this.turnAgentComposition.dispatchAutomationSubagent`.

SHA-256 of the source span: `807f4645a702eceb2e2d925910085a17d1d43cc2ca79aa05a10530820306ff74`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
