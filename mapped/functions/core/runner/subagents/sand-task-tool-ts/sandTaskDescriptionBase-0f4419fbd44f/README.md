# `sandTaskDescriptionBase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/sand-task-tool.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/sand-task-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763489-763492](../../../../../../../reference/runtime/host-main.cjs#L763489-L763492) | `FunctionDeclaration` | não | `toolName, executorForked` |
| [evaluation:556531-556534](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556531-L556534) | `FunctionDeclaration` | não | `toolName, executorForked` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763489-763492](../../../../../../../reference/runtime/host-main.cjs#L763489-L763492) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556531-556534](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556531-L556534) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:763489

Chamadas escritas diretamente neste corpo: `.join`.

SHA-256 do trecho: `d374d402b8efe747e1a19e6045b2a917c9e4efd83063e0502f89784b70a5b630`.

### evaluation:556531

Chamadas escritas diretamente neste corpo: `.join`.

SHA-256 do trecho: `d374d402b8efe747e1a19e6045b2a917c9e4efd83063e0502f89784b70a5b630`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
