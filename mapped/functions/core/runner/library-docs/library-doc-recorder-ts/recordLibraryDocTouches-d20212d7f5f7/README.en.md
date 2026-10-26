# `recordLibraryDocTouches`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/library-docs/library-doc-recorder.ts` · [Module README](../../../../../../modules/core/runner/library-docs/library-doc-recorder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774544-774562](../../../../../../../reference/runtime/host-main.cjs#L774544-L774562) | `FunctionDeclaration` | no | `ctx, deps, candidates, meta3` |
| [evaluation:574120-574138](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574120-L574138) | `FunctionDeclaration` | no | `ctx, deps, candidates, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774544-774562](../../../../../../../reference/runtime/host-main.cjs#L774544-L774562) | 6 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:574120-574138](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574120-L574138) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:774544

Calls written directly in this body: `deps.recorder.record`, `turnAttributionFromContext`.

SHA-256 of the source span: `897c5ea8c0c34eb0acd274bf9ff55dfa0b6721948ce7f328fcdfe108e12d82bd`.

### evaluation:574120

Calls written directly in this body: `deps.recorder.record`, `turnAttributionFromContext`.

SHA-256 of the source span: `897c5ea8c0c34eb0acd274bf9ff55dfa0b6721948ce7f328fcdfe108e12d82bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
