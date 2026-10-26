# `readShipmentCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shipment-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shipment-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707109-707143](../../../../../../reference/runtime/host-main.cjs#L707109-L707143) | `FunctionDeclaration` | não | `value, options2 = {}` |
| [evaluation:481255-481289](../../../../../../reference/runtime/sand-eval-runner.cjs#L481255-L481289) | `FunctionDeclaration` | não | `value, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707109-707143](../../../../../../reference/runtime/host-main.cjs#L707109-L707143) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481255-481289](../../../../../../reference/runtime/sand-eval-runner.cjs#L481255-L481289) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:707109

Chamadas escritas diretamente neste corpo: `Date.now`, `new ShipmentReader`, `reader.date`, `reader.items`, `reader.merchant`, `reader.record`, `reader.stage`, `reader.text`, `reader.tracking`.

SHA-256 do trecho: `f36a7fb3cf05399cb6002ace91887b422a32dd8035a7a67cec69a563ed08731b`.

### evaluation:481255

Chamadas escritas diretamente neste corpo: `Date.now`, `new ShipmentReader`, `reader.date`, `reader.items`, `reader.merchant`, `reader.record`, `reader.stage`, `reader.text`, `reader.tracking`.

SHA-256 do trecho: `f36a7fb3cf05399cb6002ace91887b422a32dd8035a7a67cec69a563ed08731b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
