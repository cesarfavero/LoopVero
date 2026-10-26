# `build/emit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/conversation-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769289-769300](../../../../../../../../reference/runtime/host-main.cjs#L769289-L769300) | `ArrowFunctionExpression` | não | `message, timestampMs` |
| [evaluation:564936-564947](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564936-L564947) | `ArrowFunctionExpression` | não | `message, timestampMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769289-769300](../../../../../../../../reference/runtime/host-main.cjs#L769289-L769300) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564936-564947](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564936-L564947) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:769289

Chamadas escritas diretamente neste corpo: `host.emitUpdate`, `turn.reportWidgetShown`.

SHA-256 do trecho: `a712aa8c8aada20286a604540d555fe251a343de61155900df770ca0e80d98d8`.

### evaluation:564936

Chamadas escritas diretamente neste corpo: `host.emitUpdate`, `turn.reportWidgetShown`.

SHA-256 do trecho: `a712aa8c8aada20286a604540d555fe251a343de61155900df770ca0e80d98d8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
