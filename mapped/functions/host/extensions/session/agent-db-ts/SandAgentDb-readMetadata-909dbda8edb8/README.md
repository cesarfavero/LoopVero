# `SandAgentDb.readMetadata`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718419-718423](../../../../../../../reference/runtime/host-main.cjs#L718419-L718423) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718419-718423](../../../../../../../reference/runtime/host-main.cjs#L718419-L718423) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:718419

Chamadas escritas diretamente neste corpo: `agentMetadataSerde.deserialize`, `fromHex`, `getDefaultAgentMetadata`, `this.readKv`.

SHA-256 do trecho: `5e9905ec24dd2e4c7bdff0bfeeabfb655ce46d66ba43d7b93b27a2eefdc63c27`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
