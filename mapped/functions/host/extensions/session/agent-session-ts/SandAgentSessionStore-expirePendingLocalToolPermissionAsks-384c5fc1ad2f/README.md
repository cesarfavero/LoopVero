# `SandAgentSessionStore.expirePendingLocalToolPermissionAsks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723527-723537](../../../../../../../reference/runtime/host-main.cjs#L723527-L723537) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723527-723537](../../../../../../../reference/runtime/host-main.cjs#L723527-L723537) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723527

Chamadas escritas diretamente neste corpo: `this.withAgentDb`.

SHA-256 do trecho: `b642a8d86b9a64a5f760544cc0d32bfb1c547f1ce2d16b705ff8b7049b848e9d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
