# `packFailureDetail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-extension-install.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-extension-install-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551227-551238](../../../../../../../reference/runtime/host-main.cjs#L551227-L551238) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551227-551238](../../../../../../../reference/runtime/host-main.cjs#L551227-L551238) | 9 | 0 | 0 | 3 | 0 | 0 |

### host:551227

Calls written directly in this body: `.join`, `.replaceAll`, `.slice`, `.split`, `stderr.trim`.

Assignment or increment targets: `exit`.

SHA-256 of the source span: `ae5d2ff3b0adc1308f178f04f498f595384d828fe2f92a98e368aa7f6e9b388b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
