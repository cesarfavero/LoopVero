# `SandAgentSessionStore.writeActiveAgentId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723252-723258](../../../../../../../reference/runtime/host-main.cjs#L723252-L723258) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723252-723258](../../../../../../../reference/runtime/host-main.cjs#L723252-L723258) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:723252

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `this.activeAgentPointerPath`, `writeSandDataFileSync`.

SHA-256 do trecho: `02b4bf264048a1e36ceeaed0e2f05dffce95f9ddf35ccffa658f11baf802fe12`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
