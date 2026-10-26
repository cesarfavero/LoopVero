# `parseChannelAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/channel-address.ts` · [Module README](../../../../../modules/shared/channels/channel-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505225-505233](../../../../../../reference/runtime/host-main.cjs#L505225-L505233) | `FunctionDeclaration` | no | `raw` |
| [evaluation:474457-474465](../../../../../../reference/runtime/sand-eval-runner.cjs#L474457-L474465) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505225-505233](../../../../../../reference/runtime/host-main.cjs#L505225-L505233) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:474457-474465](../../../../../../reference/runtime/sand-eval-runner.cjs#L474457-L474465) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:505225

Calls written directly in this body: `.trim`, `raw.trim`, `trimmed.indexOf`, `trimmed.slice`.

SHA-256 of the source span: `04ea0717e7e7692792da3a0239654ce9503e7de35bc6b7c0d107dc0a5378abb6`.

### evaluation:474457

Calls written directly in this body: `.trim`, `raw.trim`, `trimmed.indexOf`, `trimmed.slice`.

SHA-256 of the source span: `b2b6b5092377e22244a82cca8c7ede3401abee7cd8f4aa14ff5b1962594eb808`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
