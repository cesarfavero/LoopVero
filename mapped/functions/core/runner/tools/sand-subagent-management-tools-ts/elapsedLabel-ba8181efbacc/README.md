# `elapsedLabel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780827-780833](../../../../../../../reference/runtime/host-main.cjs#L780827-L780833) | `FunctionDeclaration` | não | `elapsedMs3` |
| [evaluation:581174-581180](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581174-L581180) | `FunctionDeclaration` | não | `elapsedMs3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780827-780833](../../../../../../../reference/runtime/host-main.cjs#L780827-L780833) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581174-581180](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581174-L581180) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:780827

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `Math.round`.

SHA-256 do trecho: `ba1a095f81115453012e180ccf8238f86e179b6cf2dd1598b0d1c868695b8829`.

### evaluation:581174

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `Math.round`.

SHA-256 do trecho: `ba1a095f81115453012e180ccf8238f86e179b6cf2dd1598b0d1c868695b8829`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
