# `coordinatingWorkersSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641079-641099](../../../../../../reference/runtime/host-main.cjs#L641079-L641099) | `FunctionDeclaration` | não | `options2` |
| [evaluation:431692-431712](../../../../../../reference/runtime/sand-eval-runner.cjs#L431692-L431712) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641079-641099](../../../../../../reference/runtime/host-main.cjs#L641079-L641099) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431692-431712](../../../../../../reference/runtime/sand-eval-runner.cjs#L431692-L431712) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:641079

Chamadas escritas diretamente neste corpo: `paragraphs.join`, `placementConsentClauses`, `sendToAgentDeliveryClause`, `sendToAgentResumeHint`, `sharedCheckoutWorktreeHint`.

SHA-256 do trecho: `905d7adbff16e75b8e85d4bd21c80e50eadd45198ccc0528dc52e68d56d3fce2`.

### evaluation:431692

Chamadas escritas diretamente neste corpo: `paragraphs.join`, `placementConsentClauses`, `sendToAgentDeliveryClause`, `sendToAgentResumeHint`, `sharedCheckoutWorktreeHint`.

SHA-256 do trecho: `905d7adbff16e75b8e85d4bd21c80e50eadd45198ccc0528dc52e68d56d3fce2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
