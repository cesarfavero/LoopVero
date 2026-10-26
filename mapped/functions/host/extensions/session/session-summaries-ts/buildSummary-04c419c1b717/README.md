# `buildSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `host/extensions/session/session-summaries.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722647-722720](../../../../../../../reference/runtime/host-main.cjs#L722647-L722720) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722647-722720](../../../../../../../reference/runtime/host-main.cjs#L722647-L722720) | 10 | 0 | 3 | 2 | 0 | 0 |

### host:722647

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `Number`, `agentHasDurableFootprint`, `description9.trim`, `ensureSettingsFile`, `fileProfile.name.trim`, `getSandProfilePath`, `getSandSettingsPath`, `groupConfig.memberIds.filter`, `hasPlaceholderProfileName`, `normalizeSandVoiceId`, `normalizeSandVoiceLanguage`, `normalizeSandVoiceSpeed`, `orNull`, `readAvatarWithinDir`, `readLegacyProfileAvatarField`, `readSandGroupConfig`, `readSandProfileCreationMetadata`, `readSandProfileFile`, `readSandProfileHarness`, `readSandSettingsFile`, `resolveDerivedAvatarFilename`.

SHA-256 do trecho: `417924132b82a5d29ab55fd3a6d9068d850516f7b63733c27afc00d3b9d5461b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
