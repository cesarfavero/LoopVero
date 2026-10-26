# `isInvalidJsonError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620163-620165](../../../../../reference/runtime/host-main.cjs#L620163-L620165) | `FunctionDeclaration` | no | `error64` |
| [evaluation:304517-304519](../../../../../reference/runtime/sand-eval-runner.cjs#L304517-L304519) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620163-620165](../../../../../reference/runtime/host-main.cjs#L620163-L620165) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304517-304519](../../../../../reference/runtime/sand-eval-runner.cjs#L304517-L304519) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620163

Calls written directly in this body: `errorTextIncludes`.

SHA-256 of the source span: `74c4db4a5838e90f2c24b76c378115e75b909727f5ca7a066189a94a2cf43d7b`.

### evaluation:304517

Calls written directly in this body: `errorTextIncludes`.

SHA-256 of the source span: `eff05e5e3347ee55e33b18d293fcdb273972a43e53984437521450f54da15ab0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
