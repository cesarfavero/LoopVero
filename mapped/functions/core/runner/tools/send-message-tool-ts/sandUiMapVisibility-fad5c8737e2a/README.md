# `sandUiMapVisibility`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761150-761153](../../../../../../../reference/runtime/host-main.cjs#L761150-L761153) | `FunctionDeclaration` | não | `deps` |
| [evaluation:551965-551968](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551965-L551968) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761150-761153](../../../../../../../reference/runtime/host-main.cjs#L761150-L761153) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551965-551968](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551965-L551968) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:761150

Chamadas escritas diretamente neste corpo: `deps.sandUiMap`, `deps.uiGates`.

SHA-256 do trecho: `0b47e68dc06114384192297d484c54507bacde9c6eccf55891298d05eeb8545d`.

### evaluation:551965

Chamadas escritas diretamente neste corpo: `deps.sandUiMap`, `deps.uiGates`.

SHA-256 do trecho: `0b47e68dc06114384192297d484c54507bacde9c6eccf55891298d05eeb8545d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
