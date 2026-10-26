# `WorkingStateWarmer.runWarm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-warmer.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-warmer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786004-786035](../../../../../../../reference/runtime/host-main.cjs#L786004-L786035) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786004-786035](../../../../../../../reference/runtime/host-main.cjs#L786004-L786035) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:786004

Calls written directly in this body: `Promise.race`, `new AbortController`, `new Promise`, `this.deps.config`, `this.deps.operationTimeout.arm`, `this.deps.warmAgent`, `timeout2.dispose`.

Assignment or increment targets: `this.cancelActiveWarm`.

SHA-256 of the source span: `4fdf35487ab189d8003c56e64de700df5617ce6ea6a188e8b87cbdecef5dc5a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
