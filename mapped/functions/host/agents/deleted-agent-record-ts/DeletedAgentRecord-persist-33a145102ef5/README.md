# `_DeletedAgentRecord.persist`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/deleted-agent-record.ts` · [README do módulo](../../../../../modules/host/agents/deleted-agent-record-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478826-478830](../../../../../../reference/runtime/host-main.cjs#L478826-L478830) | `method` | não | `next` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478826-478830](../../../../../../reference/runtime/host-main.cjs#L478826-L478830) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:478826

Chamadas escritas diretamente neste corpo: `this.agents.clear`, `this.agents.set`, `this.flush`.

SHA-256 do trecho: `4ec4a3c1641c520d1270328da636fa22134376317857bcd6ecccc215f694f821`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
