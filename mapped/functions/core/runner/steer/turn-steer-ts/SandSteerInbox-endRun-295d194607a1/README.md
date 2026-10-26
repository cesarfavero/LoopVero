# `SandSteerInbox.endRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/steer/turn-steer.ts` · [README do módulo](../../../../../../modules/core/runner/steer/turn-steer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:589838-589842](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589838-L589842) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589838-589842](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589838-L589842) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:589838

Chamadas escritas diretamente neste corpo: `steer.settle`, `this.pending.splice`, `this.settlePoppedAsDelivered`.

Alvos de atribuição ou incremento: `this.accepting`.

SHA-256 do trecho: `5cd831c8230f96167d412afe4c6ca448881fd290256e9b63b4d1d46a525464c5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
