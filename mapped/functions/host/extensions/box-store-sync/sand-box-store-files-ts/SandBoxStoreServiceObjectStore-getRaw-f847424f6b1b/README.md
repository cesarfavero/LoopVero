# `SandBoxStoreServiceObjectStore.getRaw`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:474846-474858](../../../../../../../reference/runtime/host-main.cjs#L474846-L474858) | `method` | sim | `key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474846-474858](../../../../../../../reference/runtime/host-main.cjs#L474846-L474858) | 3 | 0 | 2 | 3 | 0 | 1 |

### host:474846

Chamadas escritas diretamente neste corpo: `fetchAgentStoreObjectFromUrl`, `this.presignRead`, `this.takePrefetchedRead`.

SHA-256 do trecho: `76c4292c20f72e872151825ad4e23ab5bb628420fb9117847d3e5cbe4f4408f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
