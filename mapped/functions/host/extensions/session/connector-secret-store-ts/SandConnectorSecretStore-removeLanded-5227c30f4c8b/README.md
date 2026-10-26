# `SandConnectorSecretStore.removeLanded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/connector-secret-store.ts` · [README do módulo](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719159-719170](../../../../../../../reference/runtime/host-main.cjs#L719159-L719170) | `method` | não | `agentId, path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719159-719170](../../../../../../../reference/runtime/host-main.cjs#L719159-L719170) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:719159

Chamadas escritas diretamente neste corpo: `new SandConnectorTokenRemovalRefusedError`, `this.inCheckedFolder`, `this.reportFailure`.

Alvos de lançamento explícito: `SandConnectorTokenRemovalRefusedError`.

SHA-256 do trecho: `c02fbda0fee2ada0e4dd19e7813176744e234343764deebe3b1a552a51a71cfa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
