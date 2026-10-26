# `truncatePreservingUserQuery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-summarization/prompt-truncation.js` · [Module README](../../../../modules/agent-summarization/prompt-truncation-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617278-617296](../../../../../reference/runtime/host-main.cjs#L617278-L617296) | `FunctionDeclaration` | no | `entry, maxChars` |
| [evaluation:285818-285836](../../../../../reference/runtime/sand-eval-runner.cjs#L285818-L285836) | `FunctionDeclaration` | no | `entry, maxChars` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617278-617296](../../../../../reference/runtime/host-main.cjs#L617278-L617296) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:285818-285836](../../../../../reference/runtime/sand-eval-runner.cjs#L285818-L285836) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:617278

Calls written directly in this body: `.join`, `.replace`, `.trim`, `entry.matchAll`, `entry.replace`, `entry.slice`, `matches.map`, `queryBlocks.slice`, `rest.slice`.

SHA-256 of the source span: `1e892db4758de506ef3c689e285e8de79c6263cf4ede1d25eff7ac2707cd2bd3`.

### evaluation:285818

Calls written directly in this body: `.join`, `.replace`, `.trim`, `entry.matchAll`, `entry.replace`, `entry.slice`, `matches.map`, `queryBlocks.slice`, `rest.slice`.

SHA-256 of the source span: `4d668a484ed22935eaf172b0f8a45a6d5a200ad124ec7750ebe3aca94b0c007a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
