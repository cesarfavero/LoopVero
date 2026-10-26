# `SandAgentDb.serializeMetadata`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718424-718426](../../../../../../../reference/runtime/host-main.cjs#L718424-L718426) | `method` | não | `metadata2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718424-718426](../../../../../../../reference/runtime/host-main.cjs#L718424-L718426) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:718424

Chamadas escritas diretamente neste corpo: `agentMetadataSerde.serialize`, `toHex3`.

SHA-256 do trecho: `775a7c2f2771107fe364c4d4be0c5cfaa30617fa64fc8151b555c0796dd40f07`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
