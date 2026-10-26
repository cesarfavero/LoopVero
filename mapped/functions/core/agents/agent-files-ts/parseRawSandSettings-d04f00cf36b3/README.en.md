# `parseRawSandSettings`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-files.ts` · [Module README](../../../../../modules/core/agents/agent-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490872-490881](../../../../../../reference/runtime/host-main.cjs#L490872-L490881) | `FunctionDeclaration` | no | `raw` |
| [evaluation:629096-629105](../../../../../../reference/runtime/sand-eval-runner.cjs#L629096-L629105) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490872-490881](../../../../../../reference/runtime/host-main.cjs#L490872-L490881) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:629096-629105](../../../../../../reference/runtime/sand-eval-runner.cjs#L629096-L629105) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:490872

Calls written directly in this body: `JSON.parse`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `399c23122ea785fb3aca943c4aee7c86b6de6c3cb5dc089395de279442af24bc`.

### evaluation:629096

Calls written directly in this body: `JSON.parse`.

Assignment or increment targets: `parsed`.

SHA-256 of the source span: `de39f4310a390b693dfaad521bb060ec3c107d7f7a0107c780a00c97fef3c36d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
