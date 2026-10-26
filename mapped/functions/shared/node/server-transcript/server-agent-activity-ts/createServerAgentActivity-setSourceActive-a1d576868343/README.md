# `createServerAgentActivity/setSourceActive`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-agent-activity.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711149-711156](../../../../../../../reference/runtime/host-main.cjs#L711149-L711156) | `FunctionExpression` | não | `active` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711149-711156](../../../../../../../reference/runtime/host-main.cjs#L711149-L711156) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:711149

Chamadas escritas diretamente neste corpo: `agents.delete`, `clearStaleTimers`, `shouldEmit`.

SHA-256 do trecho: `7b7ed02cf3da9f8656c5202fba4be857c2741d2a3ef9681cfeb1ed9a8c5f4f17`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
