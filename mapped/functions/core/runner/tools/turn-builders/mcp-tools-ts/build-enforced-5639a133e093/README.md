# `build/enforced`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/turn-builders/mcp-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/mcp-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780756-780756](../../../../../../../../reference/runtime/host-main.cjs#L780756-L780756) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:581094-581094](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581094-L581094) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780756-780756](../../../../../../../../reference/runtime/host-main.cjs#L780756-L780756) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:780756 usa retorno implícito de arrow function.
| [evaluation:581094-581094](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581094-L581094) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:581094 usa retorno implícito de arrow function.

### host:780756

Chamadas escritas diretamente neste corpo: `host.gates.mcpRemovalIntentGuard`.

SHA-256 do trecho: `1d10b941b57c1b3100c13f1ca44c439daa516931b4a60ab6ff2fb4484db75096`.

### evaluation:581094

Chamadas escritas diretamente neste corpo: `host.gates.mcpRemovalIntentGuard`.

SHA-256 do trecho: `1d10b941b57c1b3100c13f1ca44c439daa516931b4a60ab6ff2fb4484db75096`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
