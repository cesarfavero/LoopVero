# `parseSectionShas`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-snapshot.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-snapshot-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717122-717131](../../../../../../reference/runtime/host-main.cjs#L717122-L717131) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717122-717131](../../../../../../reference/runtime/host-main.cjs#L717122-L717131) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:717122

Calls written directly in this body: `Array.isArray`, `parseSectionSha`, `sections.push`.

SHA-256 of the source span: `011abc5a1d63a84beeb7ea61e0b52c21524ca41aaaa268ed989b4028e1abed97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
