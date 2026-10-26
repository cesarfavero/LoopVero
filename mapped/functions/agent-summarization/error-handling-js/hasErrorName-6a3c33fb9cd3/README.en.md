# `hasErrorName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620119-620126](../../../../../reference/runtime/host-main.cjs#L620119-L620126) | `FunctionDeclaration` | no | `error64, targetName` |
| [evaluation:304473-304480](../../../../../reference/runtime/sand-eval-runner.cjs#L304473-L304480) | `FunctionDeclaration` | no | `error63, targetName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620119-620126](../../../../../reference/runtime/host-main.cjs#L620119-L620126) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:304473-304480](../../../../../reference/runtime/sand-eval-runner.cjs#L304473-L304480) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:620119

Calls written directly in this body: `iterateErrorChain`.

SHA-256 of the source span: `10af3a14dae19d8735bf6132370d83bbe5d6b4f660810157f17f6582a01a5db2`.

### evaluation:304473

Calls written directly in this body: `iterateErrorChain`.

SHA-256 of the source span: `56eb31c22e7a31c108dcb5178b37d26f877067e527f06218cc98c6e683566613`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
