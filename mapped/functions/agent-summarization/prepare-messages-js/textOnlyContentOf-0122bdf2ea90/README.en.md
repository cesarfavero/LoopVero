# `textOnlyContentOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/prepare-messages.js` · [Module README](../../../../modules/agent-summarization/prepare-messages-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620540-620554](../../../../../reference/runtime/host-main.cjs#L620540-L620554) | `FunctionDeclaration` | no | `content` |
| [evaluation:304894-304908](../../../../../reference/runtime/sand-eval-runner.cjs#L304894-L304908) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620540-620554](../../../../../reference/runtime/host-main.cjs#L620540-L620554) | 3 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:304894-304908](../../../../../reference/runtime/sand-eval-runner.cjs#L304894-L304908) | 3 | 1 | 0 | 4 | 0 | 0 |

### host:620540

Calls written directly in this body: `Array.isArray`, `plainTextOf`.

Assignment or increment targets: `text3`.

SHA-256 of the source span: `b5f1faf2642e806d3d77995238c386c863c3b3e2c3481d606b0dea974b8f5e8f`.

### evaluation:304894

Calls written directly in this body: `Array.isArray`, `plainTextOf`.

Assignment or increment targets: `text3`.

SHA-256 of the source span: `013ac0772597e57b62f4ccf1536b6b09b02fa2a088fdbd29b67f63e74d0790c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
