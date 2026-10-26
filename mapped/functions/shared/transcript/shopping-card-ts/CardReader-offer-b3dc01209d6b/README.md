# `CardReader.offer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shopping-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shopping-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707400-707440](../../../../../../reference/runtime/host-main.cjs#L707400-L707440) | `method` | não | `path33, value` |
| [evaluation:481522-481562](../../../../../../reference/runtime/sand-eval-runner.cjs#L481522-L481562) | `method` | não | `path33, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707400-707440](../../../../../../reference/runtime/host-main.cjs#L707400-L707440) | 12 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481522-481562](../../../../../../reference/runtime/sand-eval-runner.cjs#L481522-L481562) | 12 | 0 | 0 | 3 | 0 | 0 |

### host:707400

Chamadas escritas diretamente neste corpo: `SAND_SHOPPING_AVAILABILITIES.join`, `isOneOf3`, `this.error`, `this.list`, `this.money`, `this.record`, `this.text`, `this.url`.

Alvos de atribuição ou incremento: `availability`, `listPrice`.

SHA-256 do trecho: `6634e593ccc5fe5333b685526a9c3260d545c09486d5ef5784b3b7ee695bbd2c`.

### evaluation:481522

Chamadas escritas diretamente neste corpo: `SAND_SHOPPING_AVAILABILITIES.join`, `isOneOf2`, `this.error`, `this.list`, `this.money`, `this.record`, `this.text`, `this.url`.

Alvos de atribuição ou incremento: `availability`, `listPrice`.

SHA-256 do trecho: `a1cf36e460056c0c7c047935ef6b1c5d57c380eab44098a6ca7d692142b137b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
