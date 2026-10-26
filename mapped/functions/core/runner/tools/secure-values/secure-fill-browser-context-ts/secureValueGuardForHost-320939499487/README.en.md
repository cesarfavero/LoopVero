# `secureValueGuardForHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-fill-browser-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-browser-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767842-767846](../../../../../../../../reference/runtime/host-main.cjs#L767842-L767846) | `FunctionDeclaration` | no | `host` |
| [evaluation:563359-563363](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563359-L563363) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767842-767846](../../../../../../../../reference/runtime/host-main.cjs#L767842-L767846) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:563359-563363](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563359-L563363) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:767842

Calls written directly in this body: `createSecureValueGuard`, `host.gates.secureValues`.

SHA-256 of the source span: `9268d448117f81b1343323b8ebc1ce462ea418407fe03f10ba2483b03d493cd2`.

### evaluation:563359

Calls written directly in this body: `createSecureValueGuard`, `host.gates.secureValues`.

SHA-256 of the source span: `9268d448117f81b1343323b8ebc1ce462ea418407fe03f10ba2483b03d493cd2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
