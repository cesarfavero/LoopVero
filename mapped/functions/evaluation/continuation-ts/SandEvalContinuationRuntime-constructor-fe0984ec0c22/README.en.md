# `_SandEvalContinuationRuntime.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/continuation.ts` · [Module README](../../../../modules/evaluation/continuation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628758-628768](../../../../../reference/runtime/sand-eval-runner.cjs#L628758-L628768) | `method` | no | `config2, store, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628758-628768](../../../../../reference/runtime/sand-eval-runner.cjs#L628758-L628768) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:628758

Calls written directly in this body: `createAutomationState`, `new SandEvalContinuationControl`.

Assignment or increment targets: `this.agentState`, `this.automationStore`, `this.control`, `this.maxWakes`, `this.store`.

SHA-256 of the source span: `7f2e90c781b427677d4a7fcf9981c2101016576d37b67a087e4aff12ead03747`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
