# `start/createAdapter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541685-541714](../../../../../../../reference/runtime/host-main.cjs#L541685-L541714) | `ArrowFunctionExpression` | não | `{ credentials, signal }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541685-541714](../../../../../../../reference/runtime/host-main.cjs#L541685-L541714) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:541685

Chamadas escritas diretamente neste corpo: `CsnapsCodebaseTelemetryAdapter.create`, `createPollingPolicy2`, `getSandRootDir`.

SHA-256 do trecho: `c894cc32c7fcc97ecc44b4ac0aa980d6d8a92a03cf66588c4772bb975561ee36`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
