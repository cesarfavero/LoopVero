# `serializeComputerError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777269-777279](../../../../../../../reference/runtime/host-main.cjs#L777269-L777279) | `FunctionDeclaration` | no | `error64, args` |
| [evaluation:576914-576924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576914-L576924) | `FunctionDeclaration` | no | `error63, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777269-777279](../../../../../../../reference/runtime/host-main.cjs#L777269-L777279) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576914-576924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576914-L576924) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:777269

Calls written directly in this body: `new ComputerUseError`, `new ComputerUseResult`, `new ComputerUseToolCall`, `wrapToolCall`.

SHA-256 of the source span: `fcff9e30bd730e435de1244c612cc4bb70bcde7400e4bbc3c7d11d11814f5fdc`.

### evaluation:576914

Calls written directly in this body: `new ComputerUseError`, `new ComputerUseResult`, `new ComputerUseToolCall`, `wrapToolCall`.

SHA-256 of the source span: `4306a72dbdd29322b089de1186c9cb99e41fb415f08ad572826ced62add7c026`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
