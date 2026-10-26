# `SandAgentIdentityService.runSerialized`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495724-495733](../../../../../../../reference/runtime/host-main.cjs#L495724-L495733) | `method` | não | `run` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495724-495733](../../../../../../../reference/runtime/host-main.cjs#L495724-L495733) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:495724

Chamadas escritas diretamente neste corpo: `next.then`, `this.queue.then`.

Alvos de atribuição ou incremento: `this.queue`.

SHA-256 do trecho: `48d6b0dc68e209b5dcd69bf3a0e9500a14fc79d87b21314a92ecb816398780e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
