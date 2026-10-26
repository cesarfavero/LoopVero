# `compareAgentSummaries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `shared/agents/agent-summaries.ts` · [README do módulo](../../../../../modules/shared/agents/agent-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722885-722887](../../../../../../reference/runtime/host-main.cjs#L722885-L722887) | `FunctionDeclaration` | não | `a, b2, mode = "row-updated"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722885-722887](../../../../../../reference/runtime/host-main.cjs#L722885-L722887) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:722885

Chamadas escritas diretamente neste corpo: `agentRecencyOf`.

SHA-256 do trecho: `61578359d8280e86117fbe057512854b90a8a7426680052300ca8d045e80b64e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
