# `textTagAllowed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732484-732489](../../../../../../../reference/runtime/host-main.cjs#L732484-L732489) | `FunctionDeclaration` | no | `tag` |
| [evaluation:539496-539501](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539496-L539501) | `FunctionDeclaration` | no | `tag` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732484-732489](../../../../../../../reference/runtime/host-main.cjs#L732484-L732489) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539496-539501](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539496-L539501) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:732484

Calls written directly in this body: `.every`, `TEXT_ELEMENTS.has`.

SHA-256 of the source span: `c01f911eac7b117e6f0fbd7e460d997abeea2eb83fca69261539e52a5bde65a6`.

### evaluation:539496

Calls written directly in this body: `.every`, `TEXT_ELEMENTS.has`.

SHA-256 of the source span: `c01f911eac7b117e6f0fbd7e460d997abeea2eb83fca69261539e52a5bde65a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
