# `shipmentDateMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shipment-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shipment-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706978-706986](../../../../../../reference/runtime/host-main.cjs#L706978-L706986) | `FunctionDeclaration` | não | `date6` |
| [evaluation:481124-481132](../../../../../../reference/runtime/sand-eval-runner.cjs#L481124-L481132) | `FunctionDeclaration` | não | `date6` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706978-706986](../../../../../../reference/runtime/host-main.cjs#L706978-L706986) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481124-481132](../../../../../../reference/runtime/sand-eval-runner.cjs#L481124-L481132) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:706978

Chamadas escritas diretamente neste corpo: `DATE_PATTERN.exec`, `Date.UTC`, `match2.map`, `new Date`, `parsed2.getUTCDate`, `parsed2.getUTCFullYear`, `parsed2.getUTCMonth`.

SHA-256 do trecho: `ddb1ff1b8dd45da9779c4cd157398f9bbeaa1c325fdd708541c667a2011b52fc`.

### evaluation:481124

Chamadas escritas diretamente neste corpo: `DATE_PATTERN.exec`, `Date.UTC`, `match2.map`, `new Date`, `parsed.getUTCDate`, `parsed.getUTCFullYear`, `parsed.getUTCMonth`.

SHA-256 do trecho: `b7262f8a085970462e58400f3257b0dc6c7395768e7b25dc3cdf434c07663cdd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
