# `isEnvFileName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-images.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-images-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567288-567291](../../../../../../reference/runtime/sand-eval-runner.cjs#L567288-L567291) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567288-567291](../../../../../../reference/runtime/sand-eval-runner.cjs#L567288-L567291) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:567288

Calls written directly in this body: `.toLowerCase`, `base.endsWith`, `base.startsWith`, `import_node_path37.posix.basename`.

SHA-256 of the source span: `97b56b022f905607a829aa0dca6a073817a5d1f0ef5a8e689db976ecb1a07772`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
