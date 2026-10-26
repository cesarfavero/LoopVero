# `createAgentStoreClient`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:474113-474128](../../../../../../../reference/runtime/host-main.cjs#L474113-L474128) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474113-474128](../../../../../../../reference/runtime/host-main.cjs#L474113-L474128) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:474113

Chamadas escritas diretamente neste corpo: `createSandBackendTransport`, `new BcsAgentStoreTransport`, `new TokenCachingAgentStoreClient`.

SHA-256 do trecho: `efb9c6b3ae5071f72b4b19a7df13b8df9b1b6061e187e23b344d4c277820e15f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
