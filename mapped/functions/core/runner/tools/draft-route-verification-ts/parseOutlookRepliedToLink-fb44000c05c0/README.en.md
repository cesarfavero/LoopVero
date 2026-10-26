# `parseOutlookRepliedToLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735029-735035](../../../../../../../reference/runtime/host-main.cjs#L735029-L735035) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540603-540609](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540603-L540609) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735029-735035](../../../../../../../reference/runtime/host-main.cjs#L735029-L735035) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540603-540609](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540603-L540609) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:735029

Calls written directly in this body: `OUTLOOK_WEB_HOSTS.has`, `URL.canParse`, `new URL`, `outlookMessageSchema.safeParse`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `43d1bdd6ff127ad5751bcbf01cf9e136444083d4df4ff4a732aab47c75659e05`.

### evaluation:540603

Calls written directly in this body: `OUTLOOK_WEB_HOSTS.has`, `URL.canParse`, `new URL`, `outlookMessageSchema.safeParse`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `b29b2d9631b270911a5988d35488c661f09ac6901ff763a449d685b5926d966d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
