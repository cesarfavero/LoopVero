# `getAgentAvatarPng`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-profile-files.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-profile-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722860-722867](../../../../../../../reference/runtime/host-main.cjs#L722860-L722867) | `FunctionDeclaration` | sim | `host, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722860-722867](../../../../../../../reference/runtime/host-main.cjs#L722860-L722867) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:722860

Chamadas escritas diretamente neste corpo: `getSandProfilePath`, `host.getAgentDir`, `readAvatarBytesWithinDir`, `readLegacyProfileAvatarField`, `readLegacyStoredAvatar`, `resolveDerivedAvatarFilename`.

SHA-256 do trecho: `38fbd0f45e632a3eaf169b9b693cfa9320347f2f683ab8f6c4e8db8a1d912df4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
