# `reviewComputerCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699546-699641](../../../../../../reference/runtime/host-main.cjs#L699546-L699641) | `FunctionDeclaration` | sim | `args, call` |
| [evaluation:513302-513397](../../../../../../reference/runtime/sand-eval-runner.cjs#L513302-L513397) | `FunctionDeclaration` | sim | `args, call` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699546-699641](../../../../../../reference/runtime/host-main.cjs#L699546-L699641) | 16 | 0 | 5 | 3 | 5 | 0 |
| [evaluation:513302-513397](../../../../../../reference/runtime/sand-eval-runner.cjs#L513302-L513397) | 16 | 0 | 5 | 3 | 5 | 0 |

### host:699546

Chamadas escritas diretamente neste corpo: `args.ctx.get`, `assertDisplayStateUnchanged`, `call.fingerprint`, `call.summarize`, `classifyAlongsideCapture`, `controller.approvedFingerprintFor`, `controller.cardReasonFor`, `formatSandComputerAutoReviewBlockedReason`, `new SandComputerAutoReviewBlockedError`, `options2.captureDisplayStateIdentity`, `options2.getApprovalExpiryPolicy`, `pageChangedAfterReview`, `recordedCardRefusal`, `requestReviewedApproval`, `reviewAgainstApprovedCard`, `runShadowClassifier`.

Alvos de lançamento explícito: `SandComputerAutoReviewBlockedError`, `pageChangedAfterReview`.

SHA-256 do trecho: `6b3d78a60ef4e921198405c8d86e9d71b6a8521406b66303d01516290b1dddc9`.

### evaluation:513302

Chamadas escritas diretamente neste corpo: `args.ctx.get`, `assertDisplayStateUnchanged`, `call.fingerprint`, `call.summarize`, `classifyAlongsideCapture`, `controller.approvedFingerprintFor`, `controller.cardReasonFor`, `formatSandComputerAutoReviewBlockedReason`, `new SandComputerAutoReviewBlockedError`, `options2.captureDisplayStateIdentity`, `options2.getApprovalExpiryPolicy`, `pageChangedAfterReview`, `recordedCardRefusal`, `requestReviewedApproval`, `reviewAgainstApprovedCard`, `runShadowClassifier`.

Alvos de lançamento explícito: `SandComputerAutoReviewBlockedError`, `pageChangedAfterReview`.

SHA-256 do trecho: `6b3d78a60ef4e921198405c8d86e9d71b6a8521406b66303d01516290b1dddc9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
