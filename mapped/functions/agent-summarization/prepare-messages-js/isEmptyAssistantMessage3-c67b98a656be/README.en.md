# `isEmptyAssistantMessage3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/prepare-messages.js` · [Module README](../../../../modules/agent-summarization/prepare-messages-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620520-620529](../../../../../reference/runtime/host-main.cjs#L620520-L620529) | `FunctionDeclaration` | no | `message` |
| [evaluation:304874-304883](../../../../../reference/runtime/sand-eval-runner.cjs#L304874-L304883) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620520-620529](../../../../../reference/runtime/host-main.cjs#L620520-L620529) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:304874-304883](../../../../../reference/runtime/sand-eval-runner.cjs#L304874-L304883) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:620520

Calls written directly in this body: `Array.isArray`, `isRedactedString`.

SHA-256 of the source span: `e64c9de0520a904df0d25e5b1ac20fdc6f8dd641ae2717b4b228a614b6003922`.

### evaluation:304874

Calls written directly in this body: `Array.isArray`, `isRedactedString`.

SHA-256 of the source span: `e64c9de0520a904df0d25e5b1ac20fdc6f8dd641ae2717b4b228a614b6003922`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
