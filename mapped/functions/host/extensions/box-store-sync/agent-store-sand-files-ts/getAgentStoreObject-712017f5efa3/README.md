# `getAgentStoreObject`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:474307-474314](../../../../../../../reference/runtime/host-main.cjs#L474307-L474314) | `FunctionDeclaration` | sim | `client, sourceId, relPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474307-474314](../../../../../../../reference/runtime/host-main.cjs#L474307-L474314) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:474307

Chamadas escritas diretamente neste corpo: `client.presignReads`, `fetchAgentStoreObjectFromUrl`.

SHA-256 do trecho: `82605903ab25bce2c6335132802b2736a1608f3e416a3f1c932a04692596326b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
