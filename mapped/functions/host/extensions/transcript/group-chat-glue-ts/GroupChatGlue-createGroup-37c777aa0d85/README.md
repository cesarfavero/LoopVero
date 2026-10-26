# `GroupChatGlue.createGroup`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/group-chat-glue.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738416-738429](../../../../../../../reference/runtime/host-main.cjs#L738416-L738429) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738416-738429](../../../../../../../reference/runtime/host-main.cjs#L738416-L738429) | 0 | 0 | 4 | 1 | 0 | 0 |

### host:738416

Chamadas escritas diretamente neste corpo: `this.finalizedSummary`, `this.resolveGroupMemberIds`, `this.sealGroup`, `this.tm.createAgent`, `this.tm.roster.emitAgents`.

SHA-256 do trecho: `5f8b51f1b4619f86cdeb616aefb6b7909dd95bb8f77f34837ade2b89f2f4c9a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
