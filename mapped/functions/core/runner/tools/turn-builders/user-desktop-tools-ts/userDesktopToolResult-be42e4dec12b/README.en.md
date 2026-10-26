# `userDesktopToolResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781795-781825](../../../../../../../../reference/runtime/host-main.cjs#L781795-L781825) | `FunctionDeclaration` | no | `result` |
| [evaluation:582140-582170](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582140-L582170) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781795-781825](../../../../../../../../reference/runtime/host-main.cjs#L781795-L781825) | 8 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:582140-582170](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582140-L582170) | 8 | 0 | 0 | 7 | 0 | 0 |

### host:781795

Calls written directly in this body: `callToolResult.safeParse`, `output2.data.content.map`, `refusal3`, `textItem`, `toolResult`, `unexpectedOutputText`.

SHA-256 of the source span: `8e7ade759416643c9884c8717549745929dc19e09dba1e87c2f5264a33f51a47`.

### evaluation:582140

Calls written directly in this body: `callToolResult.safeParse`, `output2.data.content.map`, `refusal3`, `textItem`, `toolResult`, `unexpectedOutputText`.

SHA-256 of the source span: `8e7ade759416643c9884c8717549745929dc19e09dba1e87c2f5264a33f51a47`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
