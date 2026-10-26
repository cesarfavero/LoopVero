# `isGrokGmailProviderIdentifier`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732785-732787](../../../../../../../reference/runtime/host-main.cjs#L732785-L732787) | `FunctionDeclaration` | no | `providerIdentifier` |
| [evaluation:540307-540309](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540307-L540309) | `FunctionDeclaration` | no | `providerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732785-732787](../../../../../../../reference/runtime/host-main.cjs#L732785-L732787) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540307-540309](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540307-L540309) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732785

Calls written directly in this body: `GROK_GMAIL_PROVIDER_IDENTIFIER.test`.

SHA-256 of the source span: `9ee0bb9c07c2238099fe4e8afbf663187bceab3d98afbe14b46e051794748fc9`.

### evaluation:540307

Calls written directly in this body: `GROK_GMAIL_PROVIDER_IDENTIFIER.test`.

SHA-256 of the source span: `9ee0bb9c07c2238099fe4e8afbf663187bceab3d98afbe14b46e051794748fc9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
