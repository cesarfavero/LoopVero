# `createBoxSandMcpExec`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684880-685011](../../../../../../reference/runtime/host-main.cjs#L684880-L685011) | `FunctionDeclaration` | no | `box, options2 = {}` |
| [evaluation:514668-514799](../../../../../../reference/runtime/sand-eval-runner.cjs#L514668-L514799) | `FunctionDeclaration` | no | `box, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684880-685011](../../../../../../reference/runtime/host-main.cjs#L684880-L685011) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514668-514799](../../../../../../reference/runtime/sand-eval-runner.cjs#L514668-L514799) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:684880

Calls written directly in this body: `.withName`, `createContext`, `withSandBoxTouchReason`.

SHA-256 of the source span: `62892e65c2f27e922a752aa54efe0549ea1bbdb5f4be35cb46397351dbd8932d`.

### evaluation:514668

Calls written directly in this body: `.withName`, `createContext`, `withSandBoxTouchReason`.

SHA-256 of the source span: `f41fdfb3b42be48dfe4d4ed88465866e0648495fe76ea19aca3b6835e11026df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
