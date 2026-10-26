# `raiseCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-publish-app.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-publish-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566945-566957](../../../../../../reference/runtime/sand-eval-runner.cjs#L566945-L566957) | `FunctionDeclaration` | yes | `deps, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566945-566957](../../../../../../reference/runtime/sand-eval-runner.cjs#L566945-L566957) | 1 | 0 | 1 | 3 | 0 | 1 |

### evaluation:566945

Calls written directly in this body: `deps.raisePublishCard`, `errorLogTag`, `process.stderr.write`.

SHA-256 of the source span: `85580f21a9663fa1b79cd8e0707245a529c64fe3a25425c98323a157a2128cc3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
