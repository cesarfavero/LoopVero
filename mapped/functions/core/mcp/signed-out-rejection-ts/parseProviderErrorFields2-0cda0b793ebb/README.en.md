# `parseProviderErrorFields2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/signed-out-rejection.ts` · [Module README](../../../../../modules/core/mcp/signed-out-rejection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585301-585316](../../../../../../reference/runtime/sand-eval-runner.cjs#L585301-L585316) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585301-585316](../../../../../../reference/runtime/sand-eval-runner.cjs#L585301-L585316) | 5 | 0 | 0 | 3 | 0 | 1 |

### evaluation:585301

Calls written directly in this body: `JSON.parse`, `isUnknownRecord2`.

Assignment or increment targets: `parsed`.

SHA-256 of the source span: `e270b681a693a9bc51252dce36c4131c586483ce2c3c45936dfaafedea816d24`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
