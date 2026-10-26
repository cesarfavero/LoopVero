# `findOpenTagEnd`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-tag-parsing.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-tag-parsing-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476087-476106](../../../../../../reference/runtime/host-main.cjs#L476087-L476106) | `FunctionDeclaration` | no | `content, startIndex` |
| [evaluation:255397-255416](../../../../../../reference/runtime/sand-eval-runner.cjs#L255397-L255416) | `FunctionDeclaration` | no | `content, startIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476087-476106](../../../../../../reference/runtime/host-main.cjs#L476087-L476106) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:255397-255416](../../../../../../reference/runtime/sand-eval-runner.cjs#L255397-L255416) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:476087

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `i`, `inQuote`.

SHA-256 of the source span: `98a9e43e662a3f72b91cfd6bff3840d57fc008ec4accd0a046463fa8c99613db`.

### evaluation:255397

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `i`, `inQuote`.

SHA-256 of the source span: `98a9e43e662a3f72b91cfd6bff3840d57fc008ec4accd0a046463fa8c99613db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
