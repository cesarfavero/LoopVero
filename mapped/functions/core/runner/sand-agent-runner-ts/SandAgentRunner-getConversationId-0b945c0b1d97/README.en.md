# `_SandAgentRunner.getConversationId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593952-593954](../../../../../../reference/runtime/sand-eval-runner.cjs#L593952-L593954) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593952-593954](../../../../../../reference/runtime/sand-eval-runner.cjs#L593952-L593954) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:593952

Calls written directly in this body: `this.agentStore.getId`, `this.getAgentIdImpl`.

SHA-256 of the source span: `9f721e0e4152c7003cd22347c5cccf948a27fc8255488e839c93877c5c5d8bfa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
