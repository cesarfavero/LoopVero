# `formatProjectSubagentPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641366-641368](../../../../../../reference/runtime/host-main.cjs#L641366-L641368) | `FunctionDeclaration` | no | `options2` |
| [evaluation:431979-431981](../../../../../../reference/runtime/sand-eval-runner.cjs#L431979-L431981) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641366-641368](../../../../../../reference/runtime/host-main.cjs#L641366-L641368) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431979-431981](../../../../../../reference/runtime/sand-eval-runner.cjs#L431979-L431981) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:641366

Calls written directly in this body: `formatProjectSubagentDocsPrompt`.

SHA-256 of the source span: `d0dc3cdf118f4096c27eefb6322d0f71f9e6cee94d5ab28667987258610a8b04`.

### evaluation:431979

Calls written directly in this body: `formatProjectSubagentDocsPrompt`.

SHA-256 of the source span: `d0dc3cdf118f4096c27eefb6322d0f71f9e6cee94d5ab28667987258610a8b04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
