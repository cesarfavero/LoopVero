# `keptModeSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454060-454062](../../../../../reference/runtime/host-main.cjs#L454060-L454062) | `FunctionDeclaration` | no | `path33` |
| [evaluation:627652-627654](../../../../../reference/runtime/sand-eval-runner.cjs#L627652-L627654) | `FunctionDeclaration` | no | `path33` |
| [state-worker:653-655](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L653-L655) | `FunctionDeclaration` | no | `path` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454060-454062](../../../../../reference/runtime/host-main.cjs#L454060-L454062) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627652-627654](../../../../../reference/runtime/sand-eval-runner.cjs#L627652-L627654) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:653-655](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L653-L655) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454060

Calls written directly in this body: `keptModeOf`.

SHA-256 of the source span: `657552db1c2b9f0e2ca2af2d2c76c67b65cbc7a610472273dc2a5d1f383c7ebe`.

### evaluation:627652

Calls written directly in this body: `keptModeOf`.

SHA-256 of the source span: `9c5383b77557ae7b9f889a791571ffdca357f21a22b2fbdf19f74dd215c35532`.

### state-worker:653

Calls written directly in this body: `keptModeOf`.

SHA-256 of the source span: `556414feacfd75f169fc2162581c61857dccaf2195ef4accf74ed17f6324e562`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
