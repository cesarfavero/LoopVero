# `capabilitySections`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641108-641131](../../../../../../reference/runtime/host-main.cjs#L641108-L641131) | `FunctionDeclaration` | no | `options2` |
| [evaluation:431721-431744](../../../../../../reference/runtime/sand-eval-runner.cjs#L431721-L431744) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641108-641131](../../../../../../reference/runtime/host-main.cjs#L641108-L641131) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431721-431744](../../../../../../reference/runtime/sand-eval-runner.cjs#L431721-L431744) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:641108

Calls written directly in this body: `coordinatingWorkersSection`, `formatConsolidatedWakeGuidance`, `progressSection`, `resolvedSendMessageSection`, `sections.push`.

SHA-256 of the source span: `421bf171fb94b2de9eef8d75baf2ec3454dfcf89c3df4ce733921687f6b14dd5`.

### evaluation:431721

Calls written directly in this body: `coordinatingWorkersSection`, `formatConsolidatedWakeGuidance`, `progressSection`, `resolvedSendMessageSection`, `sections.push`.

SHA-256 of the source span: `421bf171fb94b2de9eef8d75baf2ec3454dfcf89c3df4ce733921687f6b14dd5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
