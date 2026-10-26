# `_SandAgentRunner.setLatestPromptMessagesGetter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593929-593937](../../../../../../reference/runtime/sand-eval-runner.cjs#L593929-L593937) | `method` | no | `next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593929-593937](../../../../../../reference/runtime/sand-eval-runner.cjs#L593929-L593937) | 2 | 0 | 0 | 0 | 0 | 1 |

### evaluation:593929

Calls written directly in this body: `.filter`, `ending`.

Assignment or increment targets: `this.lastUserMessages`, `this.latestPromptMessagesGetter`.

SHA-256 of the source span: `0bbd3129a67b3c6e1ae807bd4e84ac9aaa2c01c499036129632aa6c8c983c5c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
