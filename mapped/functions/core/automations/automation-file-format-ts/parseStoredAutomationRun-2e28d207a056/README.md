# `parseStoredAutomationRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716570-716595](../../../../../../reference/runtime/host-main.cjs#L716570-L716595) | `FunctionDeclaration` | não | `entry` |
| [evaluation:627284-627309](../../../../../../reference/runtime/sand-eval-runner.cjs#L627284-L627309) | `FunctionDeclaration` | não | `entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716570-716595](../../../../../../reference/runtime/host-main.cjs#L716570-L716595) | 14 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627284-627309](../../../../../../reference/runtime/sand-eval-runner.cjs#L627284-L627309) | 14 | 0 | 0 | 3 | 0 | 0 |

### host:716570

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `clampAutomationCoalescedRunIds`, `clampAutomationRunDetail`.

SHA-256 do trecho: `dd537e02907605d2bfd910c61965e467386a4996e5ffdabdf509a59971f42b86`.

### evaluation:627284

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `clampAutomationCoalescedRunIds`, `clampAutomationRunDetail`.

SHA-256 do trecho: `3e6c6052be26de9f069c51de85c3b5dc393d91f5083aa7085520cd3d4e07516c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
