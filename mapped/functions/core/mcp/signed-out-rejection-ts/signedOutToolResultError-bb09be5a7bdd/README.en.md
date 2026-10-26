# `signedOutToolResultError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/signed-out-rejection.ts` · [Module README](../../../../../modules/core/mcp/signed-out-rejection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585317-585326](../../../../../../reference/runtime/sand-eval-runner.cjs#L585317-L585326) | `FunctionDeclaration` | no | `result, serverHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585317-585326](../../../../../../reference/runtime/sand-eval-runner.cjs#L585317-L585326) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:585317

Calls written directly in this body: `PROVIDER_INVALID_TOKEN_ANSWERS.find`, `answer.matches`, `asSignedOut`, `firstText`, `parseProviderErrorFields2`, `text3.trim`.

SHA-256 of the source span: `e431d46cf89ab857745059df674c1b975f94d4d96d5218c629716911e1988ec5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
