# `hasConnectCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620152-620159](../../../../../reference/runtime/host-main.cjs#L620152-L620159) | `FunctionDeclaration` | no | `error64, targetCode` |
| [evaluation:304506-304513](../../../../../reference/runtime/sand-eval-runner.cjs#L304506-L304513) | `FunctionDeclaration` | no | `error63, targetCode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620152-620159](../../../../../reference/runtime/host-main.cjs#L620152-L620159) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:304506-304513](../../../../../reference/runtime/sand-eval-runner.cjs#L304506-L304513) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:620152

Calls written directly in this body: `iterateErrorChain`.

SHA-256 of the source span: `d3c98ca8f76b1ac6a0b2df9585785fbd845faa06795dfac9ab2396b111a4b88c`.

### evaluation:304506

Calls written directly in this body: `iterateErrorChain`.

SHA-256 of the source span: `605ba4389b4d5b52b4bc83a2cc5ca7f1dabb019d020fb869b21e0e3f6bb717c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
