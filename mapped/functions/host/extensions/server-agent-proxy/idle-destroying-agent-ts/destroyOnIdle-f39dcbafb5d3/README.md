# `destroyOnIdle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/idle-destroying-agent.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/idle-destroying-agent-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714123-714130](../../../../../../../reference/runtime/host-main.cjs#L714123-L714130) | `FunctionDeclaration` | não | `socket, idleMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714123-714130](../../../../../../../reference/runtime/host-main.cjs#L714123-L714130) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714123

Chamadas escritas diretamente neste corpo: `socket.on`.

SHA-256 do trecho: `1404fc49f44929f6b4e025bff1f6e4d66e8018c194196128b2a32025ea995ad6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
