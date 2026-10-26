# `AgentStoreObjectStore.put`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-object-store.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475251-475277](../../../../../../../reference/runtime/host-main.cjs#L475251-L475277) | `method` | sim | `key, bytes, opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475251-475277](../../../../../../../reference/runtime/host-main.cjs#L475251-L475277) | 2 | 0 | 2 | 1 | 1 | 0 |

### host:475251

Chamadas escritas diretamente neste corpo: `new BoxStoreCanonicalWriteConflictError`, `putAgentStoreObject`, `putAgentStoreObjectContentAddressed`.

Alvos de lançamento explícito: `BoxStoreCanonicalWriteConflictError`.

SHA-256 do trecho: `f25e4866f517ca99e2ef69e15c53a0d45f37141e28fc32c825c123e8117b50f4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
