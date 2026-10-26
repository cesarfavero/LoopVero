# `listPageTargetsOnPort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547072-547116](../../../../../../../reference/runtime/host-main.cjs#L547072-L547116) | `FunctionDeclaration` | yes | `port, fetchImpl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547072-547116](../../../../../../../reference/runtime/host-main.cjs#L547072-L547116) | 6 | 1 | 1 | 5 | 0 | 1 |

### host:547072

Calls written directly in this body: `Array.isArray`, `cdpDeadline.run`, `cdpTargetSchema.safeParse`, `findSystemErrno`, `new Error`, `targets.push`, `trustedDebuggerUrl`.

SHA-256 of the source span: `6ca25ff6ddf90f1cfa16debf0992e0eb2cb1d81863f39fef2a787d437ed121b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
