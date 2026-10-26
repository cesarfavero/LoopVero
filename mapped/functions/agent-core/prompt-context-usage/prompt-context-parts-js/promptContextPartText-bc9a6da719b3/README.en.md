# `promptContextPartText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476261-476272](../../../../../../reference/runtime/host-main.cjs#L476261-L476272) | `FunctionDeclaration` | no | `part` |
| [evaluation:255571-255582](../../../../../../reference/runtime/sand-eval-runner.cjs#L255571-L255582) | `FunctionDeclaration` | no | `part` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476261-476272](../../../../../../reference/runtime/host-main.cjs#L476261-L476272) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:255571-255582](../../../../../../reference/runtime/sand-eval-runner.cjs#L255571-L255582) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:476261

Calls written directly in this body: `text3.slice`.

Assignment or increment targets: `joined`.

SHA-256 of the source span: `ddb4e5e2d4d591a2c34af65ce29e7dd87036645e5403a5ff7d6fdf19602f4266`.

### evaluation:255571

Calls written directly in this body: `text3.slice`.

Assignment or increment targets: `joined2`.

SHA-256 of the source span: `7f9226f92156f8f2f7ba76d17b2c017d923d31b9e8236cf3f193da561c46ef83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
