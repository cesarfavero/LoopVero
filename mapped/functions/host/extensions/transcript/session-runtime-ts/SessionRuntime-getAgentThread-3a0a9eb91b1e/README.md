# `SessionRuntime.getAgentThread`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738180-738182](../../../../../../../reference/runtime/host-main.cjs#L738180-L738182) | `method` | não | `agentId, rootId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738180-738182](../../../../../../../reference/runtime/host-main.cjs#L738180-L738182) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738180

Chamadas escritas diretamente neste corpo: `.db.getThread`, `this.resolveLiveSession`, `this.tm.sessionStore.readAgentThread`.

SHA-256 do trecho: `cb2225c6ff2ed4b4c118cc03e069d4c1e6dfaf667379cd4634aaa25a6c128a71`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
