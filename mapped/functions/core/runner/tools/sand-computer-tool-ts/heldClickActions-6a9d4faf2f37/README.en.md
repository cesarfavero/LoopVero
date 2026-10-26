# `heldClickActions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777094-777113](../../../../../../../reference/runtime/host-main.cjs#L777094-L777113) | `FunctionDeclaration` | no | `args, holdDurationMs` |
| [evaluation:576739-576758](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576739-L576758) | `FunctionDeclaration` | no | `args, holdDurationMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777094-777113](../../../../../../../reference/runtime/host-main.cjs#L777094-L777113) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576739-576758](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576739-L576758) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:777094

Calls written directly in this body: `coordinate`, `new ComputerUseAction`, `new MouseDownAction`, `new MouseMoveAction`, `new MouseUpAction`, `new WaitAction`.

SHA-256 of the source span: `d5f4dc8904aa065680cf97c4831bb727d6224b002889eb6c2177990b43aa02b1`.

### evaluation:576739

Calls written directly in this body: `coordinate`, `new ComputerUseAction`, `new MouseDownAction`, `new MouseMoveAction`, `new MouseUpAction`, `new WaitAction`.

SHA-256 of the source span: `d5f4dc8904aa065680cf97c4831bb727d6224b002889eb6c2177990b43aa02b1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
