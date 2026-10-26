# `TrayManager.clearAll`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/trays/trays-service.ts` · [README do módulo](../../../../../../modules/host/extensions/trays/trays-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784514-784519](../../../../../../../reference/runtime/host-main.cjs#L784514-L784519) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784514-784519](../../../../../../../reference/runtime/host-main.cjs#L784514-L784519) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:784514

Chamadas escritas diretamente neste corpo: `this.activitySeqByTrayId.clear`, `this.emit`.

Alvos de atribuição ou incremento: `this.trays`.

SHA-256 do trecho: `578dc35b1a971491dded03e7abf96c7e3d03ffd2608c72b113b56734700b784f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
