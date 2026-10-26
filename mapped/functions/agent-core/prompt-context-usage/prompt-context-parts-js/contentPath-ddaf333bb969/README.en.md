# `contentPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476287-476295](../../../../../../reference/runtime/host-main.cjs#L476287-L476295) | `FunctionDeclaration` | no | `index, field` |
| [evaluation:255597-255605](../../../../../../reference/runtime/sand-eval-runner.cjs#L255597-L255605) | `FunctionDeclaration` | no | `index, field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476287-476295](../../../../../../reference/runtime/host-main.cjs#L476287-L476295) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255597-255605](../../../../../../reference/runtime/sand-eval-runner.cjs#L255597-L255605) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:476287

Calls written directly in this body: `new Map`, `paths.get`, `paths.set`.

Assignment or increment targets: `CONTENT_PATHS[computed]`, `path33`.

SHA-256 of the source span: `a1b1165e100d6c1f29e356e5fc0a966362b0b4b5a99da604a8d3c9c963b2842c`.

### evaluation:255597

Calls written directly in this body: `new Map`, `paths.get`, `paths.set`.

Assignment or increment targets: `CONTENT_PATHS[computed]`, `path33`.

SHA-256 of the source span: `a1b1165e100d6c1f29e356e5fc0a966362b0b4b5a99da604a8d3c9c963b2842c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
