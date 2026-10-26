# `SandFeedbackService.voteFeedback`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/feedback/feedback-service.ts` · [README do módulo](../../../../../../modules/host/extensions/feedback/feedback-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553631-553673](../../../../../../../reference/runtime/host-main.cjs#L553631-L553673) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553631-553673](../../../../../../../reference/runtime/host-main.cjs#L553631-L553673) | 10 | 0 | 3 | 1 | 3 | 1 |

### host:553631

Chamadas escritas diretamente neste corpo: `String`, `new SandFeedbackVoteTargetError`, `parseAgentId`, `this.deps.logReportFailure`, `this.deps.report`, `this.deps.trackDialogDismissed`, `this.deps.trackSubmitted`, `this.deps.trackVote`, `this.deps.transcript.setFeedbackVote`.

Alvos de lançamento explícito: `SandFeedbackVoteTargetError`.

SHA-256 do trecho: `1cb94ac56bf39d36f993dabb4c3d4d3b2aba6622b73ca8e2d886918639a71c57`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
