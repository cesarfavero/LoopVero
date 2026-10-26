# `start/report`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `host/extensions/cookie-origin-approval/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/cookie-origin-approval/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:543004-543004](../../../../../../../reference/runtime/host-main.cjs#L543004-L543004) | `ArrowFunctionExpression` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543004-543004](../../../../../../../reference/runtime/host-main.cjs#L543004-L543004) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:543004 usa retorno implícito de arrow function.

### host:543004

Chamadas escritas diretamente neste corpo: `context2.deps.telemetry.logs.reportCookieOriginApproval`.

SHA-256 do trecho: `cf81045f3a6a65abf1357cd43724b17ddb9f2ba97fd3b761c5a3487d44d89056`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
