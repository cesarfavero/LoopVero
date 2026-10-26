# `BoxStoreHibernateHookService.removeStaleChannelEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/hibernate-hook-service.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/hibernate-hook-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:482058-482068](../../../../../../../reference/runtime/host-main.cjs#L482058-L482068) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482058-482068](../../../../../../../reference/runtime/host-main.cjs#L482058-L482068) | 1 | 1 | 0 | 0 | 0 | 1 |

### host:482058

Chamadas escritas diretamente neste corpo: `entry.startsWith`, `errorMessage`, `this.deps.log`, `this.requestFifoPresent`.

SHA-256 do trecho: `11844b114f853870142524f2437cbab0bf9597391342580e57d623568363a29c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
