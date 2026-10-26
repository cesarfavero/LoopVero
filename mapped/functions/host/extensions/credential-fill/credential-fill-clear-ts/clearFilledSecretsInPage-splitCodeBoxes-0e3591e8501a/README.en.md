# `clearFilledSecretsInPage/splitCodeBoxes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-clear.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-clear-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543208-543220](../../../../../../../reference/runtime/host-main.cjs#L543208-L543220) | `ArrowFunctionExpression` | yes | `inputs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543208-543220](../../../../../../../reference/runtime/host-main.cjs#L543208-L543220) | 2 | 2 | 1 | 2 | 0 | 0 |

### host:543208

Calls written directly in this body: `.join`, `boxes.add`, `digestOf`, `inputs.filter`, `new Set`, `singles.slice`, `window2.map`.

Assignment or increment targets: `start`.

SHA-256 of the source span: `444cd0944a8c827823e74e167b9bf2690509d30a19fb52d3b599feeb94f5acbc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
