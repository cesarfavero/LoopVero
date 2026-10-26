# `hostDiagnosticLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/observability/README.en.md).

**Module:** `core/host-diagnostics.ts` · [Module README](../../../../modules/core/host-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430764-430769](../../../../../reference/runtime/host-main.cjs#L430764-L430769) | `FunctionDeclaration` | no | `diagnostic` |
| [evaluation:479636-479641](../../../../../reference/runtime/sand-eval-runner.cjs#L479636-L479641) | `FunctionDeclaration` | no | `diagnostic` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430764-430769](../../../../../reference/runtime/host-main.cjs#L430764-L430769) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479636-479641](../../../../../reference/runtime/sand-eval-runner.cjs#L479636-L479641) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:430764

Calls written directly in this body: `.filter`, `.join`, `.map`, `Object.entries`.

SHA-256 of the source span: `e2ad883affc243783fac6437bca703baeaaa32cb9f25b6160e29445c193c4603`.

### evaluation:479636

Calls written directly in this body: `.filter`, `.join`, `.map`, `Object.entries`.

SHA-256 of the source span: `e2ad883affc243783fac6437bca703baeaaa32cb9f25b6160e29445c193c4603`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
