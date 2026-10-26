# `toPhysicalBoxPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-images.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-images-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567299-567303](../../../../../../reference/runtime/sand-eval-runner.cjs#L567299-L567303) | `FunctionDeclaration` | no | `boxPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567299-567303](../../../../../../reference/runtime/sand-eval-runner.cjs#L567299-L567303) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:567299

Calls written directly in this body: `import_node_path37.posix.normalize`, `normalized.slice`, `normalized.startsWith`.

SHA-256 of the source span: `03673f33c0381f6699d88925a41079ceda29a688283fabfc10c94b15f3e9d475`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
