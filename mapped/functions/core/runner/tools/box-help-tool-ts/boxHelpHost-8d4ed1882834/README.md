# `boxHelpHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/box-help-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/box-help-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725289-725298](../../../../../../../reference/runtime/host-main.cjs#L725289-L725298) | `FunctionDeclaration` | não | `raw` |
| [evaluation:560375-560384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560375-L560384) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725289-725298](../../../../../../../reference/runtime/host-main.cjs#L725289-L725298) | 3 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:560375-560384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560375-L560384) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:725289

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `new URL`, `raw.trim`, `value.includes`.

SHA-256 do trecho: `a8b6cac146e18e791cd6e4f0cd162eefd8cb3e9ff934891beac89e1ed0c7296a`.

### evaluation:560375

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `new URL`, `raw.trim`, `value.includes`.

SHA-256 do trecho: `c11458aa0d784f4d2cab4b2ba3c4eea36b9bc6753e5efdca393e7a573e71ea1c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
