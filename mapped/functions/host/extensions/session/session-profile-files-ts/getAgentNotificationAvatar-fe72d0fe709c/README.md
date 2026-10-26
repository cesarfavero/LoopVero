# `getAgentNotificationAvatar`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-profile-files.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-profile-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722834-722851](../../../../../../../reference/runtime/host-main.cjs#L722834-L722851) | `FunctionDeclaration` | sim | `host, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722834-722851](../../../../../../../reference/runtime/host-main.cjs#L722834-L722851) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:722834

Chamadas escritas diretamente neste corpo: `AVATAR_DATA_URL_PATTERN.exec`, `base64ByteCount`, `getAgentAvatar`, `getAgentProfileText`, `parsed2[computed].toLowerCase`, `resolveWornGrokBotMark`.

SHA-256 do trecho: `84fed9aa5e484480cfa671f31f61e9e53463737d5a7af808d064b2207d7185b9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
