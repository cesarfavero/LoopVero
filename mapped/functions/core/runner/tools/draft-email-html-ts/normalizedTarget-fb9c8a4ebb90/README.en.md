# `normalizedTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732566-732569](../../../../../../../reference/runtime/host-main.cjs#L732566-L732569) | `FunctionDeclaration` | no | `target` |
| [evaluation:539578-539581](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539578-L539581) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732566-732569](../../../../../../../reference/runtime/host-main.cjs#L732566-L732569) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539578-539581](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539578-L539581) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:732566

Calls written directly in this body: `URL.canParse`, `WEB_LINK.test`, `new URL`, `target.toLowerCase`.

SHA-256 of the source span: `72efad7547912f14ad9d66af613088219769d9fdb2f0fec201f140b291d5e5fb`.

### evaluation:539578

Calls written directly in this body: `URL.canParse`, `WEB_LINK.test`, `new URL`, `target.toLowerCase`.

SHA-256 of the source span: `72efad7547912f14ad9d66af613088219769d9fdb2f0fec201f140b291d5e5fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
