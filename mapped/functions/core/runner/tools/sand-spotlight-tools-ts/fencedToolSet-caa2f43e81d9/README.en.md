# `fencedToolSet`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-spotlight-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-spotlight-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761908-761920](../../../../../../../reference/runtime/host-main.cjs#L761908-L761920) | `FunctionDeclaration` | no | `tools, dynamicToolRegistry` |
| [evaluation:554353-554365](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554353-L554365) | `FunctionDeclaration` | no | `tools, dynamicToolRegistry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761908-761920](../../../../../../../reference/runtime/host-main.cjs#L761908-L761920) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:554353-554365](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554353-L554365) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:761908

Calls written directly in this body: `ToolSetHandle.fromTools`, `dynamicTools.map`, `partitionDynamicTools`, `staticTools.some`, `tools.map`.

SHA-256 of the source span: `56ce7e2c5e23217ba07b5c4b09a71faf407f2bbbb8d520ed387d723383fed687`.

### evaluation:554353

Calls written directly in this body: `ToolSetHandle.fromTools`, `dynamicTools.map`, `partitionDynamicTools`, `staticTools.some`, `tools.map`.

SHA-256 of the source span: `56ce7e2c5e23217ba07b5c4b09a71faf407f2bbbb8d520ed387d723383fed687`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
