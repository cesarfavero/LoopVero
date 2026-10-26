# `inspectTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547606-547616](../../../../../../../reference/runtime/host-main.cjs#L547606-L547616) | `FunctionDeclaration` | yes | `target, reportFailure` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547606-547616](../../../../../../../reference/runtime/host-main.cjs#L547606-L547616) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:547606

Calls written directly in this body: `browserPageStateSchema.safeParse`, `evaluateOnTarget`, `inspectBrowserDocument.toString`, `reportFailure`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `8b3f595abdedbc47fcf9978b357e401e4301e0ba2e8f98f4529cceabb17ce340`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
