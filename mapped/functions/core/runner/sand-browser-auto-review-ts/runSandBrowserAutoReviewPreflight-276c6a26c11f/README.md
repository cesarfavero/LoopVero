# `runSandBrowserAutoReviewPreflight`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-browser-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699856-700019](../../../../../../reference/runtime/host-main.cjs#L699856-L700019) | `FunctionDeclaration` | sim | `args` |
| [evaluation:513612-513775](../../../../../../reference/runtime/sand-eval-runner.cjs#L513612-L513775) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699856-700019](../../../../../../reference/runtime/host-main.cjs#L699856-L700019) | 12 | 0 | 5 | 4 | 6 | 0 |
| [evaluation:513612-513775](../../../../../../reference/runtime/sand-eval-runner.cjs#L513612-L513775) | 12 | 0 | 5 | 4 | 6 | 0 |

### host:699856

Chamadas escritas diretamente neste corpo: `.catch`, `args.ctx.get`, `buildSandBrowserAutoReviewClassifierSubject`, `capture`, `classify4`, `classifyAlongsideCapture`, `code.trim`, `controller.cardReasonFor`, `fingerprintSandBrowserAutoReviewTarget`, `isSandBrowserAutoReviewMutatingAction`, `measureReviewPhase`, `new SandBrowserAutoReviewBlockedError`, `normalizeSandBrowserElement`, `pageChangedAfterReview`, `recordedCardRefusal`, `settle3`, `subjectFrom`, `trackedTargetPageUrl`.

Alvos de lançamento explícito: `SandBrowserAutoReviewBlockedError`, `pageChangedAfterReview`.

SHA-256 do trecho: `56673080bfcd83a851fb060fe3f1fc7b791c1d9b8286a0a8caa9809f63e42f85`.

### evaluation:513612

Chamadas escritas diretamente neste corpo: `.catch`, `args.ctx.get`, `buildSandBrowserAutoReviewClassifierSubject`, `capture`, `classify4`, `classifyAlongsideCapture`, `code.trim`, `controller.cardReasonFor`, `fingerprintSandBrowserAutoReviewTarget`, `isSandBrowserAutoReviewMutatingAction`, `measureReviewPhase`, `new SandBrowserAutoReviewBlockedError`, `normalizeSandBrowserElement`, `pageChangedAfterReview`, `recordedCardRefusal`, `settle2`, `subjectFrom`, `trackedTargetPageUrl`.

Alvos de lançamento explícito: `SandBrowserAutoReviewBlockedError`, `pageChangedAfterReview`.

SHA-256 do trecho: `cd1e0122553d50262036672fd1c7cb7af2d551f6089aad8663bbd6590b2e4a48`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
