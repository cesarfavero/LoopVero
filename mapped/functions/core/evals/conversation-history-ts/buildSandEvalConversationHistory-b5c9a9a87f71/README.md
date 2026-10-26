# `buildSandEvalConversationHistory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/conversation-history.ts` · [README do módulo](../../../../../modules/core/evals/conversation-history-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628866-628932](../../../../../../reference/runtime/sand-eval-runner.cjs#L628866-L628932) | `FunctionDeclaration` | não | `request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628866-628932](../../../../../../reference/runtime/sand-eval-runner.cjs#L628866-L628932) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:628866

Chamadas escritas diretamente neste corpo: `new ConversationHistory`, `request3.priorMessages.flatMap`.

SHA-256 do trecho: `c5fb9271913d8e6c2b6fdf361e99dc3e6c676a4605b20476182e4da1d2734173`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
