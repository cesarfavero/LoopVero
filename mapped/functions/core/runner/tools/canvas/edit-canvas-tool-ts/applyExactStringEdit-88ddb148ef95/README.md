# `applyExactStringEdit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775527-775537](../../../../../../../../reference/runtime/host-main.cjs#L775527-L775537) | `FunctionDeclaration` | não | `source, edit` |
| [evaluation:575171-575181](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575171-L575181) | `FunctionDeclaration` | não | `source, edit` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775527-775537](../../../../../../../../reference/runtime/host-main.cjs#L775527-L775537) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:575171-575181](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575171-L575181) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:775527

Chamadas escritas diretamente neste corpo: `.join`, `countOccurrences`, `source.split`.

SHA-256 do trecho: `002fe694b354c48a516c9efdd52a287e968896a6b6eec2644088ddfe9829afe3`.

### evaluation:575171

Chamadas escritas diretamente neste corpo: `.join`, `countOccurrences`, `source.split`.

SHA-256 do trecho: `002fe694b354c48a516c9efdd52a287e968896a6b6eec2644088ddfe9829afe3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
