# `parseNode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742747-742785](../../../../../../reference/runtime/host-main.cjs#L742747-L742785) | `FunctionDeclaration` | no | `depth, body` |
| [evaluation:515409-515447](../../../../../../reference/runtime/sand-eval-runner.cjs#L515409-L515447) | `FunctionDeclaration` | no | `depth, body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742747-742785](../../../../../../reference/runtime/host-main.cjs#L742747-L742785) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:515409-515447](../../../../../../reference/runtime/sand-eval-runner.cjs#L515409-L515447) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:742747

Calls written directly in this body: `.map`, `.matchAll`, `/^\/?[A-Za-z][\w-]*/.exec`, `attrs.every`, `attrs.some`, `body.slice`, `body.startsWith`, `key.search`, `splitKey`.

SHA-256 of the source span: `09af82fc4751e8b40f33ed4b06f2a18a785aa8077108eb2347f5394a80ce927d`.

### evaluation:515409

Calls written directly in this body: `.map`, `.matchAll`, `/^\/?[A-Za-z][\w-]*/.exec`, `attrs.every`, `attrs.some`, `body.slice`, `body.startsWith`, `key.search`, `splitKey`.

SHA-256 of the source span: `09af82fc4751e8b40f33ed4b06f2a18a785aa8077108eb2347f5394a80ce927d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
