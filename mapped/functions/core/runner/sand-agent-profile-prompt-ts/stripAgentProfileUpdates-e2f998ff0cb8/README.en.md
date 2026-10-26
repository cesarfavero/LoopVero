# `stripAgentProfileUpdates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-agent-profile-prompt.ts` · [Module README](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717287-717294](../../../../../../reference/runtime/host-main.cjs#L717287-L717294) | `FunctionDeclaration` | no | `text3` |
| [evaluation:529821-529828](../../../../../../reference/runtime/sand-eval-runner.cjs#L529821-L529828) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717287-717294](../../../../../../reference/runtime/host-main.cjs#L717287-L717294) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:529821-529828](../../../../../../reference/runtime/sand-eval-runner.cjs#L529821-L529828) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:717287

Calls written directly in this body: `.replace`, `.trim`, `includesAgentProfileUpdateMarker`, `stripped.replace`, `text3.includes`, `text3.replace`.

SHA-256 of the source span: `b5dd95f93a02bca2fdec3422222a06726cdcb9e1468f60d36f555d75a8c3fe42`.

### evaluation:529821

Calls written directly in this body: `.replace`, `.trim`, `includesAgentProfileUpdateMarker`, `stripped.replace`, `text3.includes`, `text3.replace`.

SHA-256 of the source span: `b5dd95f93a02bca2fdec3422222a06726cdcb9e1468f60d36f555d75a8c3fe42`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
