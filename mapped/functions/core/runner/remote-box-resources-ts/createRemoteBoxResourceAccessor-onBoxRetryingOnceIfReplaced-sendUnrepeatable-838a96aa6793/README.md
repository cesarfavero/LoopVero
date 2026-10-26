# `createRemoteBoxResourceAccessor/onBoxRetryingOnceIfReplaced/sendUnrepeatable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/remote-box-resources.ts` · [README do módulo](../../../../../modules/core/runner/remote-box-resources-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534511-534514](../../../../../../reference/runtime/sand-eval-runner.cjs#L534511-L534514) | `ArrowFunctionExpression` | sim | `call` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534511-534514](../../../../../../reference/runtime/sand-eval-runner.cjs#L534511-L534514) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:534511

Chamadas escritas diretamente neste corpo: `call`.

Alvos de atribuição ou incremento: `unrepeatableSent`.

SHA-256 do trecho: `d5120c278e4e8f81dd1db924b1ff9cb02e4d1e28648c2d3fa0f7973bab478aa6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
