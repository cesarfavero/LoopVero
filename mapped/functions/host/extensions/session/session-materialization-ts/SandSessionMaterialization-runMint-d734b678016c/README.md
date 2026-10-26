# `SandSessionMaterialization.runMint`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-materialization.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-materialization-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721434-721448](../../../../../../../reference/runtime/host-main.cjs#L721434-L721448) | `method` | sim | `agentId, mint2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721434-721448](../../../../../../../reference/runtime/host-main.cjs#L721434-L721448) | 0 | 0 | 2 | 1 | 1 | 1 |

### host:721434

Chamadas escritas diretamente neste corpo: `.catch`, `mint2`, `removeSandDataTree`, `this.host.getAgentDir`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `126c4b6515977fa995d68ab56116bf7e39768450ce3a08782e40bc82ec42ea6b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
