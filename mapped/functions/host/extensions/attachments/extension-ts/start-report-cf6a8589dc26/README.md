# `start/report`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499178-499178](../../../../../../../reference/runtime/host-main.cjs#L499178-L499178) | `ArrowFunctionExpression` | não | `diagnostic` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499178-499178](../../../../../../../reference/runtime/host-main.cjs#L499178-L499178) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:499178 usa retorno implícito de arrow function.

### host:499178

Chamadas escritas diretamente neste corpo: `context2.deps.telemetry.logs.reportHostExtensionDiagnostic`.

SHA-256 do trecho: `d3d4e5f22d61751cbd39881cf4d3559fd7ed9aa1f3141a9b3450b6589a9a6bdb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
