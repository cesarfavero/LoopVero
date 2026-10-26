# `isOneOf3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `core/runner/captcha/captcha-telemetry.ts` · [README do módulo](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489620-489622](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489620-L489622) | `FunctionDeclaration` | não | `values, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489620-489622](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489620-L489622) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489620

Chamadas escritas diretamente neste corpo: `values.some`.

SHA-256 do trecho: `cb39b08f8e6d98d144d22d1b1cb277f4426d46492c19d5dcb9ef9d5d6ddb83b9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
