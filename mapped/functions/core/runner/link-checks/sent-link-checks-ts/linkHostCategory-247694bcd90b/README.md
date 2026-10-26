# `linkHostCategory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/link-checks/sent-link-checks.ts` · [README do módulo](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583456-583461](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583456-L583461) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583456-583461](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583456-L583461) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:583456

Chamadas escritas diretamente neste corpo: `SHOPPING_BRANDS_ANY_TLD.test`, `onDomain`, `parseHttpUrl2`.

SHA-256 do trecho: `a807d2a44f6cdc8872c335a17af0942e1ad9036d409751b6268545dd3049eb5f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
