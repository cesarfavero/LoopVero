# `Walker.isGlobalFunction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750077-750079](../../../../../../../../reference/runtime/host-main.cjs#L750077-L750079) | `method` | não | `arg, scope` |
| [evaluation:522928-522930](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522928-L522930) | `method` | não | `arg, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750077-750079](../../../../../../../../reference/runtime/host-main.cjs#L750077-L750079) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522928-522930](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522928-L522930) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:750077

Chamadas escritas diretamente neste corpo: `GLOBAL_FUNCTIONS.has`, `scope.lookup`.

SHA-256 do trecho: `8e40a28c0ea6fa226d55b51efdfc5c5733dee66373fe704e61c0a272dfe9c3d3`.

### evaluation:522928

Chamadas escritas diretamente neste corpo: `GLOBAL_FUNCTIONS.has`, `scope.lookup`.

SHA-256 do trecho: `8e40a28c0ea6fa226d55b51efdfc5c5733dee66373fe704e61c0a272dfe9c3d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
