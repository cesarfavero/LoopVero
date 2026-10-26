# `SandHost.forgetDroppedAgents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-host.ts` · [README do módulo](../../../../modules/host/sand-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786788-786799](../../../../../reference/runtime/host-main.cjs#L786788-L786799) | `method` | sim | `agentIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786788-786799](../../../../../reference/runtime/host-main.cjs#L786788-L786799) | 0 | 1 | 1 | 0 | 0 | 0 |

### host:786788

Chamadas escritas diretamente neste corpo: `.catch`, `forgetDeletedAgentsOnHost`, `this.requireHostExtensions`.

SHA-256 do trecho: `95df2bda4224da3687945ea0df2fac8e21e7b6f09548d3f73ae10e816790d4ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
