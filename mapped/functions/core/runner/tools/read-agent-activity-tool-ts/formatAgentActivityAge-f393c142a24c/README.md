# `formatAgentActivityAge`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/read-agent-activity-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/read-agent-activity-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765396-765402](../../../../../../../reference/runtime/host-main.cjs#L765396-L765402) | `FunctionDeclaration` | não | `iso, nowMs2` |
| [evaluation:558763-558769](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558763-L558769) | `FunctionDeclaration` | não | `iso, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765396-765402](../../../../../../../reference/runtime/host-main.cjs#L765396-L765402) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:558763-558769](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558763-L558769) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:765396

Chamadas escritas diretamente neste corpo: `Date.parse`, `Number.isNaN`, `formatDurationMs`.

SHA-256 do trecho: `b75ae3d972a9254544cb5eb705282ca5d1743f42e769fb20679f067acaf9a696`.

### evaluation:558763

Chamadas escritas diretamente neste corpo: `Date.parse`, `Number.isNaN`, `formatDurationMs`.

SHA-256 do trecho: `ca46ae522810a287d15b7df94b6a160e97f4257f2f0d54d49fc3db480310828e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
