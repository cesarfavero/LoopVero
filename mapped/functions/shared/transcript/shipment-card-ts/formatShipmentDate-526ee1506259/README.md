# `formatShipmentDate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shipment-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shipment-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707173-707182](../../../../../../reference/runtime/host-main.cjs#L707173-L707182) | `FunctionDeclaration` | não | `date6, locale = "en-US"` |
| [evaluation:481296-481305](../../../../../../reference/runtime/sand-eval-runner.cjs#L481296-L481305) | `FunctionDeclaration` | não | `date6, locale = "en-US"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707173-707182](../../../../../../reference/runtime/host-main.cjs#L707173-L707182) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481296-481305](../../../../../../reference/runtime/sand-eval-runner.cjs#L481296-L481305) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:707173

Chamadas escritas diretamente neste corpo: `.format`, `new Intl.DateTimeFormat`, `shipmentDateMs`.

SHA-256 do trecho: `97d28af10208e6b897d0b3bfc8b527e07bee9487ff42e9c9cafb1a1758bdc6bb`.

### evaluation:481296

Chamadas escritas diretamente neste corpo: `.format`, `new Intl.DateTimeFormat`, `shipmentDateMs`.

SHA-256 do trecho: `97d28af10208e6b897d0b3bfc8b527e07bee9487ff42e9c9cafb1a1758bdc6bb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
