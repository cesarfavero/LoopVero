# `buildSandHistoryReadRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/history-reads/auto-review.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/history-reads/auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763113-763135](../../../../../../../../reference/runtime/host-main.cjs#L763113-L763135) | `FunctionDeclaration` | não | `args` |
| [evaluation:556081-556103](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556081-L556103) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763113-763135](../../../../../../../../reference/runtime/host-main.cjs#L763113-L763135) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556081-556103](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556081-L556103) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763113

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `43254a66d93fb8bf4d61a4fb8b7d8047b262a2693e16e5e1514a604ec0b3bd4e`.

### evaluation:556081

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `43254a66d93fb8bf4d61a4fb8b7d8047b262a2693e16e5e1514a604ec0b3bd4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
