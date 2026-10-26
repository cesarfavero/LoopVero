# `upsertAgentSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `shared/agents/agent-summaries.ts` · [README do módulo](../../../../../modules/shared/agents/agent-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722888-722897](../../../../../../reference/runtime/host-main.cjs#L722888-L722897) | `FunctionDeclaration` | não | `summaries, updated` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722888-722897](../../../../../../reference/runtime/host-main.cjs#L722888-L722897) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:722888

Chamadas escritas diretamente neste corpo: `next.push`, `next.sort`, `summaries.map`.

SHA-256 do trecho: `231a01fb1eaa823c26d47d7489b52269f176e1095bd19258e82405997fbfaa9e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
