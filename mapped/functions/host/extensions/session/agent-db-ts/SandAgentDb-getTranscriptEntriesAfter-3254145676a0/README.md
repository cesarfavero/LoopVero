# `SandAgentDb.getTranscriptEntriesAfter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718666-718671](../../../../../../../reference/runtime/host-main.cjs#L718666-L718671) | `method` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718666-718671](../../../../../../../reference/runtime/host-main.cjs#L718666-L718671) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:718666

Chamadas escritas diretamente neste corpo: `parseEntryRows`, `this.statements.getTranscriptEntrySeq.get`, `this.statements.listTranscriptEntriesAfterSeq.all`.

SHA-256 do trecho: `f97625258607aac45c7f1ec80f287c04af5e811915bdff2eb9eaef6165e269d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
