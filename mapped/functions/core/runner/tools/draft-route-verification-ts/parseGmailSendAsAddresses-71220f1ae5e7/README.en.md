# `parseGmailSendAsAddresses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735049-735053](../../../../../../../reference/runtime/host-main.cjs#L735049-L735053) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540623-540627](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540623-L540627) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735049-735053](../../../../../../../reference/runtime/host-main.cjs#L735049-L735053) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540623-540627](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540623-L540627) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:735049

Calls written directly in this body: `.filter`, `.map`, `gmailSendAsSchema.safeParse`, `parseDraftConnectorRecord`, `parsed2.data.sendAs.filter`.

SHA-256 of the source span: `c8eb61b6386f98e72eb4b3b9100943897ad916d453776a2368af1e03f5f096aa`.

### evaluation:540623

Calls written directly in this body: `.filter`, `.map`, `gmailSendAsSchema.safeParse`, `parseDraftConnectorRecord`, `parsed.data.sendAs.filter`.

SHA-256 of the source span: `15c5be9c9981ef5a2822b9a71a56cec0946b13e55964b79cc33b5e4887363b41`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
