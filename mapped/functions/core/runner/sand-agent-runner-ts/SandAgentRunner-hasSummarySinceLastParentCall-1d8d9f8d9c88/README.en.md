# `_SandAgentRunner.hasSummarySinceLastParentCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594090-594093](../../../../../../reference/runtime/sand-eval-runner.cjs#L594090-L594093) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594090-594093](../../../../../../reference/runtime/sand-eval-runner.cjs#L594090-L594093) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:594090

Calls written directly in this body: `this.getConversationState`, `this.summaryLifecycle.hasUnsettledOrPersistedSince`.

SHA-256 of the source span: `06fa30bc24563c34c8ac0d7619bc9ca966334cf4b0f4219c266e3c3f38ce6840`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
