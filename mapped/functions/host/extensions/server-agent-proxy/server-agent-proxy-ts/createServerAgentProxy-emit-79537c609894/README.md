# `createServerAgentProxy/emit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714619-714626](../../../../../../../reference/runtime/host-main.cjs#L714619-L714626) | `ArrowFunctionExpression` | não | `event` |
| [host:714685-714688](../../../../../../../reference/runtime/host-main.cjs#L714685-L714688) | `ArrowFunctionExpression` | não | `event` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714619-714626](../../../../../../../reference/runtime/host-main.cjs#L714619-L714626) | 2 | 0 | 0 | 1 | 0 | 0 |
| [host:714685-714688](../../../../../../../reference/runtime/host-main.cjs#L714685-L714688) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:714619

Chamadas escritas diretamente neste corpo: `activityOverlays.delete`, `activityOverlays.set`, `boundRunStateChanged`.

SHA-256 do trecho: `4327ea7a4f1aeb993f655b09942babdff6c6afa9873cce9bb6ba0238459a29ac`.

### host:714685

Chamadas escritas diretamente neste corpo: `boundEmit`, `indexer.noteEvent`.

SHA-256 do trecho: `9976d46980bf6308d29af67500b108ee02ed91f0f62aa8010171580d0b8de96c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
