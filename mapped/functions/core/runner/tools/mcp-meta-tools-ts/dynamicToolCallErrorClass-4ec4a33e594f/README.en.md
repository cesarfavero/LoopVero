# `dynamicToolCallErrorClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761844-761848](../../../../../../../reference/runtime/host-main.cjs#L761844-L761848) | `FunctionDeclaration` | no | `error64` |
| [evaluation:554118-554122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554118-L554122) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761844-761848](../../../../../../../reference/runtime/host-main.cjs#L761844-L761848) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:554118-554122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554118-L554122) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:761844

Calls written directly in this body: `errorLogTag`.

SHA-256 of the source span: `a8e76e471f4c5c1cbc16595b5d61a6b43308976b067b6ecb72e9d3979a24fdc4`.

### evaluation:554118

Calls written directly in this body: `errorLogTag`.

SHA-256 of the source span: `92c6f0591366721f51883ef9e1386690e6c8b08ad1429aa211fe305b750429b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
