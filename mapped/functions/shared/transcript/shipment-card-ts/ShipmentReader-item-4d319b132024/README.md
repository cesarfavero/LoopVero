# `ShipmentReader.item`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shipment-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shipment-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707056-707081](../../../../../../reference/runtime/host-main.cjs#L707056-L707081) | `method` | não | `path33, value` |
| [evaluation:481202-481227](../../../../../../reference/runtime/sand-eval-runner.cjs#L481202-L481227) | `method` | não | `path33, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707056-707081](../../../../../../reference/runtime/host-main.cjs#L707056-L707081) | 6 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481202-481227](../../../../../../reference/runtime/sand-eval-runner.cjs#L481202-L481227) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:707056

Chamadas escritas diretamente neste corpo: `Number.isInteger`, `this.error`, `this.record`, `this.text`, `this.url`.

Alvos de atribuição ou incremento: `quantity`.

SHA-256 do trecho: `2bbc4e15a78231432f935acb849d5db27bcd761e53c517384e134e0f05c1f198`.

### evaluation:481202

Chamadas escritas diretamente neste corpo: `Number.isInteger`, `this.error`, `this.record`, `this.text`, `this.url`.

Alvos de atribuição ou incremento: `quantity`.

SHA-256 do trecho: `2bbc4e15a78231432f935acb849d5db27bcd761e53c517384e134e0f05c1f198`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
