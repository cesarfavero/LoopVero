# `SandHost.reportGatewayCommandError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-host.ts` · [README do módulo](../../../../modules/host/sand-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786401-786407](../../../../../reference/runtime/host-main.cjs#L786401-L786407) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786401-786407](../../../../../reference/runtime/host-main.cjs#L786401-L786407) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:786401

Chamadas escritas diretamente neste corpo: `.api`, `.logs.reportGatewayCommandError`, `commandErrorReportToTelemetry`, `this.requireHostExtensions`.

SHA-256 do trecho: `54c5b34c09082d722febed8c228fb4e29ef610a5c430a16040aa0f2641121b4f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
