# `SandSubagentHostAdapter.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582930-582942](../../../../../../reference/runtime/sand-eval-runner.cjs#L582930-L582942) | `method` | no | `sessions, createRunner, dispatcher, launchReviewRequired, detached, quietOrigin, fallbackLineage, executorProfileNames, actionAuditSequencer, forkContext, isSkillServedPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582930-582942](../../../../../../reference/runtime/sand-eval-runner.cjs#L582930-L582942) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:582930

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.actionAuditSequencer`, `this.createRunner`, `this.detached`, `this.dispatcher`, `this.executorProfileNames`, `this.fallbackLineage`, `this.forkContext`, `this.isSkillServedPath`, `this.launchReviewRequired`, `this.quietOrigin`, `this.sessions`.

SHA-256 of the source span: `0cec69dce0a6e665a0f8311983ef8e2594aedb895a883d71a1f98fa91a2ccf3b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
