# `alternation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-agent-profile-prompt.ts` · [Module README](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717284-717286](../../../../../../reference/runtime/host-main.cjs#L717284-L717286) | `FunctionDeclaration` | no | `markers` |
| [evaluation:529818-529820](../../../../../../reference/runtime/sand-eval-runner.cjs#L529818-L529820) | `FunctionDeclaration` | no | `markers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717284-717286](../../../../../../reference/runtime/host-main.cjs#L717284-L717286) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:529818-529820](../../../../../../reference/runtime/sand-eval-runner.cjs#L529818-L529820) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:717284

Calls written directly in this body: `.join`, `markers.map`.

SHA-256 of the source span: `8f5a40c6bbe20b7cbdbacfecf403bd7d582925c238f3fb4ebea19b78f208b771`.

### evaluation:529818

Calls written directly in this body: `.join`, `markers.map`.

SHA-256 of the source span: `ea256517436b5035e7faceb27ef5d04e9b56adec32ab27526fe5bc31e2c81e55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
