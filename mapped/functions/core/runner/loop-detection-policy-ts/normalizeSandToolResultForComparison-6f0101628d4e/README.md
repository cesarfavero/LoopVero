# `normalizeSandToolResultForComparison`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483325-483333](../../../../../../reference/runtime/sand-eval-runner.cjs#L483325-L483333) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483325-483333](../../../../../../reference/runtime/sand-eval-runner.cjs#L483325-L483333) | 0 | 1 | 0 | 1 | 0 | 0 |

### evaluation:483325

Chamadas escritas diretamente neste corpo: `resultText.match`, `resultText.replace`, `text3.replace`.

Alvos de atribuição ou incremento: `text3`.

SHA-256 do trecho: `7dbe8a2a11a0906995dd89ace863c9631acba61a3b70e33b2a6959bd6a75a96f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
