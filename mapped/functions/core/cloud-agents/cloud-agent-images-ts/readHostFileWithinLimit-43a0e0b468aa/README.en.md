# `readHostFileWithinLimit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-images.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-images-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567462-567471](../../../../../../reference/runtime/sand-eval-runner.cjs#L567462-L567471) | `FunctionDeclaration` | yes | `path33, byteLimit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567462-567471](../../../../../../reference/runtime/sand-eval-runner.cjs#L567462-L567471) | 2 | 0 | 2 | 4 | 0 | 1 |

### evaluation:567462

Calls written directly in this body: `info2.isFile`, `new Uint8Array`.

SHA-256 of the source span: `3855ef247d3934e83f21325a1671e1cb4df0cc579023c6c9e7ae017045c3538d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
