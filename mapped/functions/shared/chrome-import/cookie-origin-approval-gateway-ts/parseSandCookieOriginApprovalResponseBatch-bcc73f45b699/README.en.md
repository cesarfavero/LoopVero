# `parseSandCookieOriginApprovalResponseBatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `shared/chrome-import/cookie-origin-approval-gateway.ts` · [Module README](../../../../../modules/shared/chrome-import/cookie-origin-approval-gateway-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486066-486079](../../../../../../reference/runtime/host-main.cjs#L486066-L486079) | `FunctionDeclaration` | no | `u2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486066-486079](../../../../../../reference/runtime/host-main.cjs#L486066-L486079) | 3 | 1 | 0 | 1 | 1 | 0 |

### host:486066

Calls written directly in this body: `describeZodIssues`, `frames.push`, `new SandWireParseError`, `parseResponseFrame`, `sandCookieOriginApprovalResponseBatchSchema.safeParse`.

Explicit throw targets: `SandWireParseError`.

SHA-256 of the source span: `1aa2d9ddd20f75921b4325c6a9530c942c06f1bf7b7bf3c1243c9f8d04644896`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
