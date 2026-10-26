# `toolResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781787-781791](../../../../../../../../reference/runtime/host-main.cjs#L781787-L781791) | `FunctionDeclaration` | no | `content, isError` |
| [evaluation:582132-582136](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582132-L582136) | `FunctionDeclaration` | no | `content, isError` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781787-781791](../../../../../../../../reference/runtime/host-main.cjs#L781787-L781791) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582132-582136](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582132-L582136) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781787

Calls written directly in this body: `new McpResult`, `new McpSuccess`.

SHA-256 of the source span: `8bca77b1f38a934c80d604cd3bbb1d14ea8474f13cb86b4104689f731b846e60`.

### evaluation:582132

Calls written directly in this body: `new McpResult`, `new McpSuccess`.

SHA-256 of the source span: `8bca77b1f38a934c80d604cd3bbb1d14ea8474f13cb86b4104689f731b846e60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
