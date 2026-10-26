# `clampAutomationRunDetail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716559-716564](../../../../../../reference/runtime/host-main.cjs#L716559-L716564) | `FunctionDeclaration` | não | `detail` |
| [evaluation:627273-627278](../../../../../../reference/runtime/sand-eval-runner.cjs#L627273-L627278) | `FunctionDeclaration` | não | `detail` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716559-716564](../../../../../../reference/runtime/host-main.cjs#L716559-L716564) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627273-627278](../../../../../../reference/runtime/sand-eval-runner.cjs#L627273-L627278) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:716559

Chamadas escritas diretamente neste corpo: `detail.trim`, `trimmed.slice`.

SHA-256 do trecho: `f8d1ad63ab0af1f8efe96a7ed8501e401154361913e19e677e5300a82440bca7`.

### evaluation:627273

Chamadas escritas diretamente neste corpo: `detail.trim`, `trimmed.slice`.

SHA-256 do trecho: `f8d1ad63ab0af1f8efe96a7ed8501e401154361913e19e677e5300a82440bca7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
