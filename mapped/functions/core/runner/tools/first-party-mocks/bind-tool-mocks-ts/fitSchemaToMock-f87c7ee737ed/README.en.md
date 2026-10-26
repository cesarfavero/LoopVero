# `fitSchemaToMock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [Module README](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555877-555933](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555877-L555933) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555877-555933](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555877-L555933) | 9 | 1 | 0 | 3 | 0 | 0 |

### evaluation:555877

Calls written directly in this body: `.filter`, `.join`, `Object.fromEntries`, `Object.keys`, `adjustments.filter`, `emptied.join`, `kept.add`, `lost.join`, `missing.filter`, `narrowToAcceptedParameters`, `new Set`, `objectSchema2.safeParse`, `propertiesOf`, `requiredOf`, `unmocked.map`, `withoutProperties`.

SHA-256 of the source span: `11836919ae5a638d401be14b1ee45e070bfadc662452cb5b3e1c7c39e9050159`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
