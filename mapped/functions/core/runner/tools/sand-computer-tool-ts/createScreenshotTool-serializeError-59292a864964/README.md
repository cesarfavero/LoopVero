# `createScreenshotTool/serializeError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777439-777439](../../../../../../../reference/runtime/host-main.cjs#L777439-L777439) | `ArrowFunctionExpression` | não | `error64` |
| [evaluation:577084-577084](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577084-L577084) | `ArrowFunctionExpression` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777439-777439](../../../../../../../reference/runtime/host-main.cjs#L777439-L777439) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:777439 usa retorno implícito de arrow function.
| [evaluation:577084-577084](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577084-L577084) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:577084 usa retorno implícito de arrow function.

### host:777439

Chamadas escritas diretamente neste corpo: `createScreenshotArgs`, `serializeComputerError`.

SHA-256 do trecho: `78e8bd65d68c5531dd0b6b3deadc3e5690d26a5a6637b78f578aff1bcd6b444a`.

### evaluation:577084

Chamadas escritas diretamente neste corpo: `createScreenshotArgs`, `serializeComputerError`.

SHA-256 do trecho: `cdf374852dc1181ae140b6e7e88e2211c496e30790ff2be0e5e3eaeccc980d03`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
