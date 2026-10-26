# `inspectBrowserDocument/usernameScore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547337-547349](../../../../../../../reference/runtime/host-main.cjs#L547337-L547349) | `ArrowFunctionExpression` | no | `input2, positions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547337-547349](../../../../../../../reference/runtime/host-main.cjs#L547337-L547349) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:547337

Calls written directly in this body: `/(?:^|\W)(?:user(?:name|[\s_-]*id)?|e[\s_-]*mail|login)(?:\W|$)/i.test`, `autocompleteTokens`, `descriptorFor`, `input2.type.toLowerCase`, `tokens.includes`.

Assignment or increment targets: `score`.

SHA-256 of the source span: `913ddb396aacb3406d8cf519b947854b8d201776f2bd80ab90c50c8fa0aed591`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
