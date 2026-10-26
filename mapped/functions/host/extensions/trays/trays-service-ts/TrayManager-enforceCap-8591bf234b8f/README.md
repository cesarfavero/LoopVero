# `TrayManager.enforceCap`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/trays/trays-service.ts` · [README do módulo](../../../../../../modules/host/extensions/trays/trays-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784544-784556](../../../../../../../reference/runtime/host-main.cjs#L784544-L784556) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784544-784556](../../../../../../../reference/runtime/host-main.cjs#L784544-L784556) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:784544

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `.sort`, `new Set`, `this.activitySeqByTrayId.delete`, `this.emit`, `this.trays.filter`.

Alvos de atribuição ou incremento: `this.trays`.

SHA-256 do trecho: `bb3d9cc4767f8e5347330d1b4853381470f2f2fbfafdd8c99fbda4f6aca96785`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
