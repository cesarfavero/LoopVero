# `isoTimeOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-connected-activity-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763695-763697](../../../../../../../reference/runtime/host-main.cjs#L763695-L763697) | `FunctionDeclaration` | não | `ms2` |
| [evaluation:556743-556745](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556743-L556745) | `FunctionDeclaration` | não | `ms2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763695-763697](../../../../../../../reference/runtime/host-main.cjs#L763695-L763697) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556743-556745](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556743-L556745) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:763695

Chamadas escritas diretamente neste corpo: `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 do trecho: `d13eb36faa726388776a9c360454cb0aadcfcd37b276833dd518496263a2b849`.

### evaluation:556743

Chamadas escritas diretamente neste corpo: `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 do trecho: `d13eb36faa726388776a9c360454cb0aadcfcd37b276833dd518496263a2b849`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
