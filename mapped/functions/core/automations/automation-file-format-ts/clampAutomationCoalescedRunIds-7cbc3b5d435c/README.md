# `clampAutomationCoalescedRunIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716565-716569](../../../../../../reference/runtime/host-main.cjs#L716565-L716569) | `FunctionDeclaration` | não | `value` |
| [evaluation:627279-627283](../../../../../../reference/runtime/sand-eval-runner.cjs#L627279-L627283) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716565-716569](../../../../../../reference/runtime/host-main.cjs#L716565-L716569) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:627279-627283](../../../../../../reference/runtime/sand-eval-runner.cjs#L627279-L627283) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:716565

Chamadas escritas diretamente neste corpo: `.slice`, `Array.isArray`, `value.filter`.

SHA-256 do trecho: `f87f14715ffe7d3ddf62499a650bf6d0df5caba2ed5091dfced02f46e518a34b`.

### evaluation:627279

Chamadas escritas diretamente neste corpo: `.slice`, `Array.isArray`, `value.filter`.

SHA-256 do trecho: `f87f14715ffe7d3ddf62499a650bf6d0df5caba2ed5091dfced02f46e518a34b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
