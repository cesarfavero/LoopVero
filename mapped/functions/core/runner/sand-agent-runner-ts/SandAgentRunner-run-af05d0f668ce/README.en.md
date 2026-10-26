# `_SandAgentRunner.run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594079-594086](../../../../../../reference/runtime/sand-eval-runner.cjs#L594079-L594086) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594079-594086](../../../../../../reference/runtime/sand-eval-runner.cjs#L594079-L594086) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:594079

Calls written directly in this body: `this.activeSpendRequest.bindRun`, `this.combinedComputerUse.reset`.

SHA-256 of the source span: `c24b470bb548dbe60bed617883fa260b9687c583fb3916a9138f8a3f3be0ab26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
