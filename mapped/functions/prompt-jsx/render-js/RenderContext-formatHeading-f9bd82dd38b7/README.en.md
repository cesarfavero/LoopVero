# `RenderContext.formatHeading`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `prompt-jsx/render.js` · [Module README](../../../../modules/prompt-jsx/render-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:629284-629291](../../../../../reference/runtime/host-main.cjs#L629284-L629291) | `method` | no | `type2, content` |
| [evaluation:318301-318308](../../../../../reference/runtime/sand-eval-runner.cjs#L318301-L318308) | `method` | no | `type2, content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629284-629291](../../../../../reference/runtime/host-main.cjs#L629284-L629291) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:318301-318308](../../../../../reference/runtime/sand-eval-runner.cjs#L318301-L318308) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:629284

Calls written directly in this body: `#.repeat`, `content.trim`, `parseInt`, `type2.slice`.

SHA-256 of the source span: `0623de58207476de382107fbfe4405b24637dcf5dc75808811b30f86b18e8868`.

### evaluation:318301

Calls written directly in this body: `#.repeat`, `content.trim`, `parseInt`, `type2.slice`.

SHA-256 of the source span: `0623de58207476de382107fbfe4405b24637dcf5dc75808811b30f86b18e8868`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
