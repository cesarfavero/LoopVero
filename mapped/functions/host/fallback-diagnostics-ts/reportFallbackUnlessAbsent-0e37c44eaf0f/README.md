# `reportFallbackUnlessAbsent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/observability/README.md).

**Módulo:** `host/fallback-diagnostics.ts` · [README do módulo](../../../../modules/host/fallback-diagnostics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453501-453503](../../../../../reference/runtime/host-main.cjs#L453501-L453503) | `FunctionDeclaration` | não | `stage, error64` |
| [evaluation:627665-627667](../../../../../reference/runtime/sand-eval-runner.cjs#L627665-L627667) | `FunctionDeclaration` | não | `stage, error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453501-453503](../../../../../reference/runtime/host-main.cjs#L453501-L453503) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627665-627667](../../../../../reference/runtime/sand-eval-runner.cjs#L627665-L627667) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:453501

Chamadas escritas diretamente neste corpo: `isMissingPathError`, `reportFallback`.

SHA-256 do trecho: `01b1d25e00c9038ec80a0e5a402fd6fd00be2811606156950932b2617795d9a4`.

### evaluation:627665

Chamadas escritas diretamente neste corpo: `isMissingPathError`, `reportFallback`.

SHA-256 do trecho: `e808be61ad453a164c35f2d184a64830e8bbbfb6fc4a2fe8fb65058eedc82075`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
