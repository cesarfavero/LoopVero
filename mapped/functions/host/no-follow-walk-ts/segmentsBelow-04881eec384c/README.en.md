# `segmentsBelow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/no-follow-walk.ts` · [Module README](../../../../modules/host/no-follow-walk-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453522-453530](../../../../../reference/runtime/host-main.cjs#L453522-L453530) | `FunctionDeclaration` | no | `root, dir` |
| [state-worker:456-464](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L456-L464) | `FunctionDeclaration` | no | `root, dir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453522-453530](../../../../../reference/runtime/host-main.cjs#L453522-L453530) | 1 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:456-464](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L456-L464) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:453522

Calls written directly in this body: `invariant`, `rel.split`, `rel.startsWith`.

SHA-256 of the source span: `f62a91b4c1337c8bbb79f1619549b12712d020ed2af6088336558f99e12c1250`.

### state-worker:456

Calls written directly in this body: `invariant`, `rel.split`, `rel.startsWith`.

SHA-256 of the source span: `db2793c002c4af777b5a3573f516f0f4468ce679959251c3a63f7595818a6916`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
