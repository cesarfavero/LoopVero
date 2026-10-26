# `renderActiveSessionsDigest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537964-537982](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537964-L537982) | `FunctionDeclaration` | no | `sessions, nowMs = Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537964-537982](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537964-L537982) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:537964

Calls written directly in this body: `.join`, `.map`, `.slice`, `.sort`, `lines2.push`, `sessions.filter`.

SHA-256 of the source span: `846378cc091ad1bd86e351a0688d56060a870147b41c34c272ae7aaa761c9f57`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
