# `errorTextIncludes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620136-620151](../../../../../reference/runtime/host-main.cjs#L620136-L620151) | `FunctionDeclaration` | no | `error64, needle` |
| [evaluation:304490-304505](../../../../../reference/runtime/sand-eval-runner.cjs#L304490-L304505) | `FunctionDeclaration` | no | `error63, needle` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620136-620151](../../../../../reference/runtime/host-main.cjs#L620136-L620151) | 3 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:304490-304505](../../../../../reference/runtime/sand-eval-runner.cjs#L304490-L304505) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:620136

Calls written directly in this body: `.includes`, `current2.message.toLowerCase`, `internalMessage.toLowerCase`, `iterateErrorChain`, `needle.toLowerCase`.

SHA-256 of the source span: `92d8d620c68ac1da37c9d7d20ea52dea37a9e0bc3699b52b340517ed052998ee`.

### evaluation:304490

Calls written directly in this body: `.includes`, `current2.message.toLowerCase`, `internalMessage.toLowerCase`, `iterateErrorChain`, `needle.toLowerCase`.

SHA-256 of the source span: `e2110bed33e90c2bb5234ac17904dc8104bfbd1e0947e0b9dac96e683af430aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
