# `createFetchAttachmentTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778219-778231](../../../../../../../reference/runtime/host-main.cjs#L778219-L778231) | `FunctionDeclaration` | no | `toolDeps` |
| [evaluation:577954-577966](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577954-L577966) | `FunctionDeclaration` | no | `toolDeps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778219-778231](../../../../../../../reference/runtime/host-main.cjs#L778219-L778231) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577954-577966](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577954-L577966) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778219

Calls written directly in this body: `defineCommunicateTool`, `new Map`.

SHA-256 of the source span: `7e31faf898191b21982e520107d3e3044403b581aeec5e60b09e76ffba5b9885`.

### evaluation:577954

Calls written directly in this body: `defineCommunicateTool`, `new Map`.

SHA-256 of the source span: `7e31faf898191b21982e520107d3e3044403b581aeec5e60b09e76ffba5b9885`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
