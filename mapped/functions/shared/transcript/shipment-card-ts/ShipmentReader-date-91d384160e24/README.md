# `ShipmentReader.date`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shipment-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shipment-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707043-707055](../../../../../../reference/runtime/host-main.cjs#L707043-L707055) | `method` | não | `value` |
| [evaluation:481189-481201](../../../../../../reference/runtime/sand-eval-runner.cjs#L481189-L481201) | `method` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707043-707055](../../../../../../reference/runtime/host-main.cjs#L707043-L707055) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:481189-481201](../../../../../../reference/runtime/sand-eval-runner.cjs#L481189-L481201) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:707043

Chamadas escritas diretamente neste corpo: `Math.abs`, `shipmentDateMs`, `this.error`.

SHA-256 do trecho: `be1bd416aaac6d4411ed4f8968c2b812925355caafb9042e3e3badd1e4380f85`.

### evaluation:481189

Chamadas escritas diretamente neste corpo: `Math.abs`, `shipmentDateMs`, `this.error`.

SHA-256 do trecho: `ac96d0e65f08ed17806d49bd55d50f5839dfc2e4ec31919df08deb2010739741`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
