# `decodeEntities`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732570-732572](../../../../../../../reference/runtime/host-main.cjs#L732570-L732572) | `FunctionDeclaration` | no | `text3` |
| [evaluation:539582-539584](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539582-L539584) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732570-732572](../../../../../../../reference/runtime/host-main.cjs#L732570-L732572) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539582-539584](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539582-L539584) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732570

Calls written directly in this body: `text3.replace`.

SHA-256 of the source span: `9fae0fa52cf6320a6726d09cce79f848c9a750dca190416469aaf67c8477f10f`.

### evaluation:539582

Calls written directly in this body: `text3.replace`.

SHA-256 of the source span: `9fae0fa52cf6320a6726d09cce79f848c9a750dca190416469aaf67c8477f10f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
