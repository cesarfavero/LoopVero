# `errorMessageIncludes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620127-620135](../../../../../reference/runtime/host-main.cjs#L620127-L620135) | `FunctionDeclaration` | no | `error64, needle` |
| [evaluation:304481-304489](../../../../../reference/runtime/sand-eval-runner.cjs#L304481-L304489) | `FunctionDeclaration` | no | `error63, needle` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620127-620135](../../../../../reference/runtime/host-main.cjs#L620127-L620135) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:304481-304489](../../../../../reference/runtime/sand-eval-runner.cjs#L304481-L304489) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:620127

Calls written directly in this body: `.includes`, `current2.message.toLowerCase`, `iterateErrorChain`, `needle.toLowerCase`.

SHA-256 of the source span: `c7c9fcd8fa4cd6e5eb78aa06d63ae54ea0d7ca8bf9abd217d0dca09fdc666642`.

### evaluation:304481

Calls written directly in this body: `.includes`, `current2.message.toLowerCase`, `iterateErrorChain`, `needle.toLowerCase`.

SHA-256 of the source span: `03a545a89c57659f89ead0f2ff9cf27a236b7182d23c23a92c1920b5c7b6ed9c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
