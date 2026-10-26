# `WorkingStateExporter.durableBlobListing/listPrefix`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-export-service.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785582-785588](../../../../../../../reference/runtime/host-main.cjs#L785582-L785588) | `ArrowFunctionExpression` | sim | `hexPrefix, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785582-785588](../../../../../../../reference/runtime/host-main.cjs#L785582-L785588) | 2 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:785582 usa retorno implícito de arrow function.

### host:785582

Chamadas escritas diretamente neste corpo: `this.deps.listDurableBlobHexIds`.

SHA-256 do trecho: `b350a10d2266bc0a08ae03648e5ac26efe24fdb8f6537a8f4ca82c6183f98731`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
