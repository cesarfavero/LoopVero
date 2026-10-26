# `createComputerTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777443-777528](../../../../../../../reference/runtime/host-main.cjs#L777443-L777528) | `FunctionDeclaration` | no | `resourceAccessor, deps` |
| [evaluation:577088-577173](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577088-L577173) | `FunctionDeclaration` | no | `resourceAccessor, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777443-777528](../../../../../../../reference/runtime/host-main.cjs#L777443-L777528) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577088-577173](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577088-L577173) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777443

Calls written directly in this body: `buildComputerParameters`, `createZodAgentTool`, `new ComputerUseToolCall`, `observeComputerTool`, `withSafeParsedArgs`, `wrapToolCall`.

SHA-256 of the source span: `8f039167792951b5b80731ec74a9e5cade2a3102c1625130142c4e77eb43af0b`.

### evaluation:577088

Calls written directly in this body: `buildComputerParameters`, `createZodAgentTool`, `new ComputerUseToolCall`, `observeComputerTool`, `withSafeParsedArgs`, `wrapToolCall`.

SHA-256 of the source span: `68459bc3cb0abca9c6469991283866a14a5f0d1738ecbdd03c834780f081ee6d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
