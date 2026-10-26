# `chromeCookieAllowHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/chrome-import/chrome-import.ts` · [Module README](../../../../../modules/shared/chrome-import/chrome-import-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485811-485813](../../../../../../reference/runtime/host-main.cjs#L485811-L485813) | `FunctionDeclaration` | no | `domain2` |
| [evaluation:574548-574550](../../../../../../reference/runtime/sand-eval-runner.cjs#L574548-L574550) | `FunctionDeclaration` | no | `domain2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485811-485813](../../../../../../reference/runtime/host-main.cjs#L485811-L485813) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574548-574550](../../../../../../reference/runtime/sand-eval-runner.cjs#L574548-L574550) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485811

Calls written directly in this body: `.toLowerCase`, `domain2.replace`.

SHA-256 of the source span: `73e55eec2b3bf74485193751387a586e426910bace453545d4c3f978339762a4`.

### evaluation:574548

Calls written directly in this body: `.toLowerCase`, `domain2.replace`.

SHA-256 of the source span: `73e55eec2b3bf74485193751387a586e426910bace453545d4c3f978339762a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
