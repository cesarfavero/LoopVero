# `createDraftToolForTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756086-756258](../../../../../../../reference/runtime/host-main.cjs#L756086-L756258) | `FunctionDeclaration` | não | `host, decisions, turn, review, recordDelivery` |
| [evaluation:542007-542179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542007-L542179) | `FunctionDeclaration` | não | `host, decisions, turn, review, recordDelivery` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756086-756258](../../../../../../../reference/runtime/host-main.cjs#L756086-L756258) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:542007-542179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542007-L542179) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:756086

Chamadas escritas diretamente neste corpo: `agentEmailDraftsForTurn`, `createDraftExternalMessageTool`, `createDraftRateLimitRetry`, `decisions.offers`, `draftToolAvailableForTurn`.

SHA-256 do trecho: `1675d609cadcad702b47226538d39299d1fa4b238f367bb808832f8fcf0ddbab`.

### evaluation:542007

Chamadas escritas diretamente neste corpo: `agentEmailDraftsForTurn`, `createDraftExternalMessageTool`, `createDraftRateLimitRetry`, `decisions.offers`, `draftToolAvailableForTurn`.

SHA-256 do trecho: `4fa0e80bc6b221913004a43a1577d09feb4d0e85bfc3d1235f4e55152c925b01`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
