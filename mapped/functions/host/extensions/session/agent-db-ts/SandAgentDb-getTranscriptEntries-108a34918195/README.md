# `SandAgentDb.getTranscriptEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718654-718657](../../../../../../../reference/runtime/host-main.cjs#L718654-L718657) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718654-718657](../../../../../../../reference/runtime/host-main.cjs#L718654-L718657) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:718654

Chamadas escritas diretamente neste corpo: `parseEntryRows`, `this.statements.listTranscriptEntries.all`.

SHA-256 do trecho: `98d99bdeef7af8858e6b5b2077bb0c3a6fa705aa2c65a9132fe86b17ea4e994c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
