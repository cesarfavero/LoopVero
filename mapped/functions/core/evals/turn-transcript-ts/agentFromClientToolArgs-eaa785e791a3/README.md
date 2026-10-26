# `agentFromClientToolArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/evals/turn-transcript.ts` · [README do módulo](../../../../../modules/core/evals/turn-transcript-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628452-628465](../../../../../../reference/runtime/sand-eval-runner.cjs#L628452-L628465) | `FunctionDeclaration` | não | `args, subagentByRequestId, mainRequestIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628452-628465](../../../../../../reference/runtime/sand-eval-runner.cjs#L628452-L628465) | 8 | 0 | 0 | 5 | 0 | 0 |

### evaluation:628452

Chamadas escritas diretamente neste corpo: `isUnknownRecord2`, `mainRequestIds.has`, `parsed.conversationId.startsWith`, `parsedModelArgs`, `subagentByRequestId.get`.

SHA-256 do trecho: `734acef54216be8befe06a0dccb0c9eaa1756ebd091477ece2734400ed420850`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
