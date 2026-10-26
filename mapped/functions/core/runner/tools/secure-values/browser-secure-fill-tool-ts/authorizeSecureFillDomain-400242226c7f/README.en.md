# `authorizeSecureFillDomain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767142-767144](../../../../../../../../reference/runtime/host-main.cjs#L767142-L767144) | `FunctionDeclaration` | no | `value, target, anySite` |
| [evaluation:562661-562663](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562661-L562663) | `FunctionDeclaration` | no | `value, target, anySite` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767142-767144](../../../../../../../../reference/runtime/host-main.cjs#L767142-L767144) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562661-562663](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562661-L562663) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:767142

Calls written directly in this body: `authorizeSandSecureFillCardDomain`, `authorizeSandSecureFillDomain`.

SHA-256 of the source span: `cc8db361730d8dd521830a7c101c0404d625bdf6c4dd79c116fe5c77341d0b6c`.

### evaluation:562661

Calls written directly in this body: `authorizeSandSecureFillCardDomain`, `authorizeSandSecureFillDomain`.

SHA-256 of the source span: `cc8db361730d8dd521830a7c101c0404d625bdf6c4dd79c116fe5c77341d0b6c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
