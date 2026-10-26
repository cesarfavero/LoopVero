# `emailHtmlNonTextTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732467-732472](../../../../../../../reference/runtime/host-main.cjs#L732467-L732472) | `FunctionDeclaration` | no | `html` |
| [evaluation:539479-539484](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539479-L539484) | `FunctionDeclaration` | no | `html` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732467-732472](../../../../../../../reference/runtime/host-main.cjs#L732467-L732472) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:539479-539484](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539479-L539484) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:732467

Calls written directly in this body: `html.matchAll`, `parseTag`, `textTagAllowed`.

SHA-256 of the source span: `d3f286f137263f8e2177f162e27f3f4fc2dbb6b287fb0e2c4a883932bc84678c`.

### evaluation:539479

Calls written directly in this body: `html.matchAll`, `parseTag`, `textTagAllowed`.

SHA-256 of the source span: `d3f286f137263f8e2177f162e27f3f4fc2dbb6b287fb0e2c4a883932bc84678c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
