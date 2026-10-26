# `parseSecureValueHttpsSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/domain.ts` · [Module README](../../../../../../modules/core/runner/secure-values/domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758039-758055](../../../../../../../reference/runtime/host-main.cjs#L758039-L758055) | `FunctionDeclaration` | no | `raw` |
| [evaluation:546230-546246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546230-L546246) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758039-758055](../../../../../../../reference/runtime/host-main.cjs#L758039-L758055) | 4 | 0 | 0 | 5 | 0 | 1 |
| [evaluation:546230-546246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546230-L546246) | 4 | 0 | 0 | 5 | 0 | 1 |

### host:758039

Calls written directly in this body: `.toLowerCase`, `candidate.includes`, `new URL`, `normalizeHostname`, `raw.trim`.

Assignment or increment targets: `url2`.

SHA-256 of the source span: `7010d9c538992f295dbed9407bcf7e795428f80cf23059c36d540363157f9008`.

### evaluation:546230

Calls written directly in this body: `.toLowerCase`, `candidate.includes`, `new URL`, `normalizeHostname`, `raw.trim`.

Assignment or increment targets: `url2`.

SHA-256 of the source span: `7a0cb2e1bfafd8b1e22f15258ba613581c767f805a85560ce7ccd5068172facf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
