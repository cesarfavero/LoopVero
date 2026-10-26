# `hashMessageChannelAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/message-destination-hash.ts` · [Module README](../../../../../../modules/core/runner/action-audit/message-destination-hash-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758000-758005](../../../../../../../reference/runtime/host-main.cjs#L758000-L758005) | `FunctionDeclaration` | no | `address` |
| [evaluation:544098-544103](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544098-L544103) | `FunctionDeclaration` | no | `address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758000-758005](../../../../../../../reference/runtime/host-main.cjs#L758000-L758005) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:544098-544103](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544098-L544103) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:758000

Calls written directly in this body: `.digest`, `.slice`, `.update`, `MESSAGE_CHANNEL_PLATFORMS.has`, `Math.max`, `address.trim`, `trimmed.indexOf`, `trimmed.slice`.

SHA-256 of the source span: `d5a817f4c64826507c0f6eeeec548aafb0990471ae6ae328f676a0b85694df52`.

### evaluation:544098

Calls written directly in this body: `.digest`, `.slice`, `.update`, `MESSAGE_CHANNEL_PLATFORMS.has`, `Math.max`, `address.trim`, `trimmed.indexOf`, `trimmed.slice`.

SHA-256 of the source span: `96793acf84ec70ae1b66769eab0812c1716327b837e1b7c028398d7fb14f3781`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
