# `createScreenshotTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777417-777442](../../../../../../../reference/runtime/host-main.cjs#L777417-L777442) | `FunctionDeclaration` | no | `resourceAccessor, deps` |
| [evaluation:577062-577087](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577062-L577087) | `FunctionDeclaration` | no | `resourceAccessor, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777417-777442](../../../../../../../reference/runtime/host-main.cjs#L777417-L777442) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577062-577087](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577062-L577087) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777417

Calls written directly in this body: `createZodAgentTool`, `new ComputerUseToolCall`, `observeComputerTool`, `withSafeParsedArgs`, `wrapToolCall`.

SHA-256 of the source span: `178c205c94ca68d3f84ea04da4154c1b29c6ea4ece35cc349dcdfa3708c8917f`.

### evaluation:577062

Calls written directly in this body: `createZodAgentTool`, `new ComputerUseToolCall`, `observeComputerTool`, `withSafeParsedArgs`, `wrapToolCall`.

SHA-256 of the source span: `7a7d556c8af9b76a69b5fbfef16d58ac512f006f30e7eccd7e3f939ef2f20192`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
