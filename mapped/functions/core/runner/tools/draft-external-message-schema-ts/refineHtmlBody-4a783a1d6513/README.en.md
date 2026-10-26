# `refineHtmlBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755085-755102](../../../../../../../reference/runtime/host-main.cjs#L755085-L755102) | `FunctionDeclaration` | no | `html, body, ctx` |
| [evaluation:539710-539727](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539710-L539727) | `FunctionDeclaration` | no | `html, body, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755085-755102](../../../../../../../reference/runtime/host-main.cjs#L755085-L755102) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539710-539727](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539710-L539727) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:755085

Calls written directly in this body: `ctx.addIssue`, `emailHtmlMatchesBody`, `emailHtmlNonTextTag`.

SHA-256 of the source span: `f88d607baf94cb02d21f20a46b3235faac92662b840b8f24ec6ba7393d960c51`.

### evaluation:539710

Calls written directly in this body: `ctx.addIssue`, `emailHtmlMatchesBody`, `emailHtmlNonTextTag`.

SHA-256 of the source span: `da9aecf2f92e790d6582c32ab8df3f81851d9c8f6e250a7a02981615f0e2a4e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
