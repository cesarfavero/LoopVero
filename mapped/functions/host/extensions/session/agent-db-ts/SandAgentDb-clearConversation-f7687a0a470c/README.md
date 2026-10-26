# `SandAgentDb.clearConversation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718936-718977](../../../../../../../reference/runtime/host-main.cjs#L718936-L718977) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718936-718977](../../../../../../../reference/runtime/host-main.cjs#L718936-L718977) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:718936

Chamadas escritas diretamente neste corpo: `.then`, `publishTranscriptMutation`, `this.notifyBoundary.settled`, `this.readMetadata`, `this.runWrite`.

SHA-256 do trecho: `8e586b9a37bf50c2408f02e75b619286ec2aeaf037e3208a85dcf4e64e209667`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
