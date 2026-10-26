# `boxDataRootSpellings`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-images.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-images-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567309-567313](../../../../../../reference/runtime/sand-eval-runner.cjs#L567309-L567313) | `FunctionDeclaration` | no | `roots` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567309-567313](../../../../../../reference/runtime/sand-eval-runner.cjs#L567309-L567313) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:567309

Calls written directly in this body: `new Set`, `roots.flatMap`.

SHA-256 of the source span: `ff42350d7ec2a04da68c9f5843be66ef5feec811eb89225e674236894e460ee4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
