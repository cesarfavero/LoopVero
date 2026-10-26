# `start/report`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/session/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728445-728445](../../../../../../../reference/runtime/host-main.cjs#L728445-L728445) | `ArrowFunctionExpression` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728445-728445](../../../../../../../reference/runtime/host-main.cjs#L728445-L728445) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:728445 usa retorno implícito de arrow function.

### host:728445

Chamadas escritas diretamente neste corpo: `context2.deps.telemetry.logs.reportAgentMediaRoot`.

SHA-256 do trecho: `a64dcbeedde914c5659e8ac2de73f70c4a363183c6abfa878a2f7593824e63db`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
