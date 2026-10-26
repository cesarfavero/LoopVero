# `secureFillFieldAccepts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767145-767147](../../../../../../../../reference/runtime/host-main.cjs#L767145-L767147) | `FunctionDeclaration` | no | `value, target` |
| [evaluation:562664-562666](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562664-L562666) | `FunctionDeclaration` | no | `value, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767145-767147](../../../../../../../../reference/runtime/host-main.cjs#L767145-L767147) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562664-562666](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562664-L562666) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:767145

Calls written directly in this body: `sandSecureFillCardFieldAccepts`, `sandSecureFillFieldAccepts`.

SHA-256 of the source span: `b45a110d0c007a1afd40c1f7d8c5bc4e8643cd57b1a5ef5a09dc25cafd1efe2e`.

### evaluation:562664

Calls written directly in this body: `sandSecureFillCardFieldAccepts`, `sandSecureFillFieldAccepts`.

SHA-256 of the source span: `b45a110d0c007a1afd40c1f7d8c5bc4e8643cd57b1a5ef5a09dc25cafd1efe2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
