# `commandErrorReportToTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-command-error.ts` · [README do módulo](../../../../modules/host/gateway-command-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489592-489606](../../../../../reference/runtime/host-main.cjs#L489592-L489606) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489592-489606](../../../../../reference/runtime/host-main.cjs#L489592-L489606) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:489592

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedErrorClass`, `brandedId`, `logFields`.

SHA-256 do trecho: `99e9fad788000c86170b1ea0f77ae5d54570999875b6d2c45d6bad6ffff1a851`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
