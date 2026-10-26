# `refineEmailBodies`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755074-755084](../../../../../../../reference/runtime/host-main.cjs#L755074-L755084) | `FunctionDeclaration` | no | `value, ctx` |
| [evaluation:539699-539709](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539699-L539709) | `FunctionDeclaration` | no | `value, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755074-755084](../../../../../../../reference/runtime/host-main.cjs#L755074-L755084) | 2 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:539699-539709](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539699-L539709) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:755074

Calls written directly in this body: `ctx.addIssue`, `emailBodyHtmlTag`, `refineHtmlBody`.

SHA-256 of the source span: `9338fffb78f14e230906bdaff61cc5b7700c8d8f38a375d31ff6dae41450f55e`.

### evaluation:539699

Calls written directly in this body: `ctx.addIssue`, `emailBodyHtmlTag`, `refineHtmlBody`.

SHA-256 of the source span: `d5ded1d0756e9e2d08274319a4cea2f04c79a80edf415a8919ba097eee6f93ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
