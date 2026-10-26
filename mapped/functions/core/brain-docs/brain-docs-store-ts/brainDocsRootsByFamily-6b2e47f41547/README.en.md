# `brainDocsRootsByFamily`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629230-629241](../../../../../../reference/runtime/sand-eval-runner.cjs#L629230-L629241) | `FunctionDeclaration` | no | `layout` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629230-629241](../../../../../../reference/runtime/sand-eval-runner.cjs#L629230-L629241) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:629230

Calls written directly in this body: `brainDocsAgentDir`, `conventionalAvatarPaths`, `getAgentAutomationsDir`, `getAgentMemoryDir`, `getUserMemoryShardsDir`.

SHA-256 of the source span: `d5cce97531cfb9068d43a692051b4350425f691a6b7163687291309407f11ea4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
