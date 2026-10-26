# `BrowserCredentialFiller.fillOneTimeCodeOnTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547898-548007](../../../../../../../reference/runtime/host-main.cjs#L547898-L548007) | `method` | yes | `targetWebSocketDebuggerUrl, request5, event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547898-548007](../../../../../../../reference/runtime/host-main.cjs#L547898-L548007) | 8 | 0 | 3 | 7 | 0 | 0 |

### host:547898

Calls written directly in this body: `URL.canParse`, `allowedFormActionOriginsFor`, `clearanceOf`, `credentialFillAuditResult`, `credentialFillFailureDetail`, `discovery.targets.find`, `hostFromSite`, `matchCredentialItemToSite`, `new URL`, `normalizedCredentialPathname`, `this.auditFill`, `this.executeFill`, `this.inspectTarget`, `this.listPages`, `trustedBrowserOrigin`.

SHA-256 of the source span: `0ecea026b9b8b14024a22671967ead6832bb2a68063219ce22c5e9aa9338b69e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
