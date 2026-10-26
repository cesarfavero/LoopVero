# `listLoadableSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-agent-composition.ts` · [Module README](../../../../../modules/core/runner/turn-agent-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588012-588015](../../../../../../reference/runtime/sand-eval-runner.cjs#L588012-L588015) | `FunctionDeclaration` | no | `listedSkills` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588012-588015](../../../../../../reference/runtime/sand-eval-runner.cjs#L588012-L588015) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588012

Calls written directly in this body: `listedSkills.store`, `store.list`, `store.listLoadable`.

SHA-256 of the source span: `3a2d43e6322187de27700c4362faefe2719ef4cdc35fab435dffdbaaeaf2af68`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
