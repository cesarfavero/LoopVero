# `isInvalidArgumentError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620166-620168](../../../../../reference/runtime/host-main.cjs#L620166-L620168) | `FunctionDeclaration` | no | `error64` |
| [evaluation:304520-304522](../../../../../reference/runtime/sand-eval-runner.cjs#L304520-L304522) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620166-620168](../../../../../reference/runtime/host-main.cjs#L620166-L620168) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304520-304522](../../../../../reference/runtime/sand-eval-runner.cjs#L304520-L304522) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620166

Calls written directly in this body: `errorTextIncludes`.

SHA-256 of the source span: `f116a2333e148e229a43120156bc8879f176538ba0b692c5e181161099db38ac`.

### evaluation:304520

Calls written directly in this body: `errorTextIncludes`.

SHA-256 of the source span: `d385b667de492e7a314e5124f55e31f93e52873d9e178e5a1dd912b1641a9efd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
