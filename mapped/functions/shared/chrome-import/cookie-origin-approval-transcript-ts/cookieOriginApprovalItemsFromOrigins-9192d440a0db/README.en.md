# `cookieOriginApprovalItemsFromOrigins`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `shared/chrome-import/cookie-origin-approval-transcript.ts` · [Module README](../../../../../modules/shared/chrome-import/cookie-origin-approval-transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774942-774956](../../../../../../reference/runtime/host-main.cjs#L774942-L774956) | `FunctionDeclaration` | no | `origins` |
| [evaluation:574571-574585](../../../../../../reference/runtime/sand-eval-runner.cjs#L574571-L574585) | `FunctionDeclaration` | no | `origins` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774942-774956](../../../../../../reference/runtime/host-main.cjs#L774942-L774956) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:574571-574585](../../../../../../reference/runtime/sand-eval-runner.cjs#L574571-L574585) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:774942

Calls written directly in this body: `cookieOriginGrantKey`, `items.push`, `new Set`, `parseChromeProfileId`, `parseCookieOrigin`, `seen.add`, `seen.has`.

SHA-256 of the source span: `60a654d52db6a20669afee19336d1d25a8b30a134ec36af41e07d68526c215eb`.

### evaluation:574571

Calls written directly in this body: `cookieOriginGrantKey`, `items.push`, `new Set`, `parseChromeProfileId`, `parseCookieOrigin`, `seen.add`, `seen.has`.

SHA-256 of the source span: `60a654d52db6a20669afee19336d1d25a8b30a134ec36af41e07d68526c215eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
