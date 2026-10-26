# `mirrorRoomMembers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495142-495148](../../../../../../../reference/runtime/host-main.cjs#L495142-L495148) | `FunctionDeclaration` | não | `agentDir, memberIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495142-495148](../../../../../../../reference/runtime/host-main.cjs#L495142-L495148) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:495142

Chamadas escritas diretamente neste corpo: `current2.memberIds.every`, `readSandGroupConfig`, `writeSandGroupConfig`.

SHA-256 do trecho: `67c1966cf8d74890e36d1716d79995d5cfcff607e20c6ab23f5910d8da4b4823`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
