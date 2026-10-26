# `SandRequestContextExecutor.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582887-582893](../../../../../../reference/runtime/sand-eval-runner.cjs#L582887-L582893) | `method` | no | `requestContext, includeTranscripts, autoReviewEnforceEnabled, resolveAgentSkills, modelVisibleTime` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582887-582893](../../../../../../reference/runtime/sand-eval-runner.cjs#L582887-L582893) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:582887

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.autoReviewEnforceEnabled`, `this.includeTranscripts`, `this.modelVisibleTime`, `this.requestContext`, `this.resolveAgentSkills`.

SHA-256 of the source span: `e65651392b32c57508bdf71583cdb2bd75f7a0e177d09577569ed32266775f19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
