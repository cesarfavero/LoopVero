# `start/trackDialogDismissed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/feedback/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/feedback/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553696-553698](../../../../../../../reference/runtime/host-main.cjs#L553696-L553698) | `ArrowFunctionExpression` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553696-553698](../../../../../../../reference/runtime/host-main.cjs#L553696-L553698) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:553696 usa retorno implícito de arrow function.

### host:553696

Chamadas escritas diretamente neste corpo: `brandedId`, `telemetry.analytics.trackEvent`.

SHA-256 do trecho: `9f9e027d1392ba929dfbd8da3c9b0b1385449f849aca054a079f7044fe0d9c24`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
